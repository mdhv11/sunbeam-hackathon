const express = require('express')

const pool = require('../db/db')
const result = require('../utils/result')

const router = express.Router()

// Share a review with another user
router.post('/:reviewId/:targetUserId', (req, res) => {
    const { reviewId, targetUserId } = req.params
    const userId = req.userId

    // Validate input
    if (!reviewId || isNaN(reviewId)) {
        return res.send(result.createErrorResult('Invalid review ID'))
    }
    if (!targetUserId || isNaN(targetUserId)) {
        return res.send(result.createErrorResult('Invalid user ID'))
    }

    // Check if user is trying to share with themselves
    if (parseInt(targetUserId) === parseInt(userId)) {
        return res.send(result.createErrorResult('You cannot share a review with yourself'))
    }

    // Check if review exists and belongs to the user
    const checkOwnershipSql = `SELECT user_id FROM reviews WHERE review_id = ?;`
    pool.query(checkOwnershipSql, [reviewId], (error, reviewData) => {
        if (error) {
            return res.send(result.createErrorResult(error))
        }
        if (reviewData.length === 0) {
            return res.send(result.createErrorResult('Review not found'))
        }
        if (reviewData[0].user_id !== userId) {
            return res.send(result.createErrorResult('You can only share your own reviews'))
        }

        // Check if target user exists
        const checkUserSql = `SELECT id FROM users WHERE id = ?;`
        pool.query(checkUserSql, [targetUserId], (error, userData) => {
            if (error) {
                return res.send(result.createErrorResult(error))
            }
            if (userData.length === 0) {
                return res.send(result.createErrorResult('Target user does not exist'))
            }

            // Check if already shared
            const checkShareSql = `SELECT * FROM shares WHERE review_id = ? AND user_id = ?;`
            pool.query(checkShareSql, [reviewId, targetUserId], (error, shareData) => {
                if (error) {
                    return res.send(result.createErrorResult(error))
                }
                if (shareData.length > 0) {
                    return res.send(result.createErrorResult('Review already shared with this user'))
                }

                // Create the share
                const sql = `INSERT INTO shares (review_id, user_id) VALUES (?, ?);`
                pool.query(sql, [reviewId, targetUserId], (error, data) => {
                    res.send(result.createResult(error, data))
                })
            })
        })
    })
})

// Get all reviews shared with the current user
router.get('/shared-with-me', (req, res) => {
    const userId = req.userId

    const sql = `
        SELECT reviews.*, users.first_name, users.last_name 
        FROM shares 
        JOIN reviews ON shares.review_id = reviews.review_id 
        JOIN users ON reviews.user_id = users.id 
        WHERE shares.user_id = ?;`
    pool.query(sql, [userId], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

// Remove a share
router.delete('/:reviewId/:targetUserId', (req, res) => {
    const { reviewId, targetUserId } = req.params
    const userId = req.userId

    if (!reviewId || isNaN(reviewId)) {
        return res.send(result.createErrorResult('Invalid review ID'))
    }
    if (!targetUserId || isNaN(targetUserId)) {
        return res.send(result.createErrorResult('Invalid user ID'))
    }

    // Check if review belongs to the user
    const checkOwnershipSql = `SELECT user_id FROM reviews WHERE review_id = ?;`
    pool.query(checkOwnershipSql, [reviewId], (error, reviewData) => {
        if (error) {
            return res.send(result.createErrorResult(error))
        }
        if (reviewData.length === 0) {
            return res.send(result.createErrorResult('Review not found'))
        }
        if (reviewData[0].user_id !== userId) {
            return res.send(result.createErrorResult('You can only unshare your own reviews'))
        }

        // Delete the share
        const sql = `DELETE FROM shares WHERE review_id = ? AND user_id = ?;`
        pool.query(sql, [reviewId, targetUserId], (error, data) => {
            res.send(result.createResult(error, data))
        })
    })
})

module.exports = router
