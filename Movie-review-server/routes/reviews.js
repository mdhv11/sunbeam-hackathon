const express = require('express')

const pool = require('../db/db')
const result = require('../utils/result')

const router = express.Router()

//create review
router.post('/:movieId', (req, res) => {
    const { review, rating } = req.body
    const { movieId } = req.params
    const userId = req.userId

    // Input validatioon
    if (!review || review.trim().length === 0) {
        return res.send(result.createErrorResult('Review text is required'))
    }
    if (!rating || rating < 1 || rating > 5) {
        return res.send(result.createErrorResult('Rating must be between 1 and 5'))
    }
    if (!movieId || isNaN(movieId)) {
        return res.send(result.createErrorResult('Invalid movie ID'))
    }

    //if movie exists in database
    const checkMovieSql = `SELECT movie_id FROM movies WHERE movie_id = ?;`
    pool.query(checkMovieSql, [movieId], (error, movieData) => {
        if (error) {
            return res.send(result.createErrorResult(error))
        }
        if (movieData.length === 0) {
            return res.send(result.createErrorResult('Movie does not exist in database'))
        }

        // if user already reviewed this movie
        const checkReviewSql = `SELECT review_id FROM reviews WHERE movie_id = ? AND user_id = ?;`
        pool.query(checkReviewSql, [movieId, userId], (error, reviewData) => {
            if (error) {
                return res.send(result.createErrorResult(error))
            }
            if (reviewData.length > 0) {
                return res.send(result.createErrorResult('You have already reviewed this movie'))
            }

            // Insert the review
            const sql = `INSERT INTO reviews (movie_id, review, rating, user_id) VALUES (?,?,?,?);`
            pool.query(sql, [movieId, review, rating, userId], (error, data) => {
                res.send(result.createResult(error, data))
            })
        })
    })
})

//get all reviews for a movie
router.get('/:movieId', (req, res) => {
    const { movieId } = req.params

    if (!movieId || isNaN(movieId)) {
        return res.send(result.createErrorResult('Invalid movie ID'))
    }

    const sql = `SELECT reviews.* FROM reviews JOIN users ON reviews.user_id = users.id WHERE movie_id = ?;`
    pool.query(sql, [movieId], (error, data) => {
        res.send(result.createResult(error, data))
    })
})


//update a review
router.put('/:reviewId', (req, res) => {
    const { review, rating } = req.body
    const { reviewId } = req.params
    const userId = req.userId

    // Validate input fields
    if (!review || review.trim().length === 0) {
        return res.send(result.createErrorResult('Review text is required'))
    }
    if (!rating || rating < 1 || rating > 5) {
        return res.send(result.createErrorResult('Rating must be between 1 and 5'))
    }
    if (!reviewId || isNaN(reviewId)) {
        return res.send(result.createErrorResult('Invalid review ID'))
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
            return res.send(result.createErrorResult('You can only edit your own reviews'))
        }

        // Update the review
        const sql = `UPDATE reviews SET review = ?, rating = ? WHERE review_id = ?;`
        pool.query(sql, [review, rating, reviewId], (error, data) => {
            res.send(result.createResult(error, data))
        })
    })
})

//delete a review
router.delete('/:reviewId', (req, res) => {
    const { reviewId } = req.params
    const userId = req.userId

    if (!reviewId || isNaN(reviewId)) {
        return res.send(result.createErrorResult('Invalid review ID'))
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
            return res.send(result.createErrorResult('You can only delete your own reviews'))
        }

        // Delete shares first (due to foreign key constraint)
        const deleteSharesSql = `DELETE FROM shares WHERE review_id = ?;`
        pool.query(deleteSharesSql, [reviewId], (error) => {
            if (error) {
                return res.send(result.createErrorResult(error))
            }

            // Delete the review
            const deleteReviewSql = `DELETE FROM reviews WHERE review_id = ?;`
            pool.query(deleteReviewSql, [reviewId], (error, data) => {
                res.send(result.createResult(error, data))
            })
        })
    })
})

module.exports = router