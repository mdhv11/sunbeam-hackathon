const express = require('express')
const cryptoJs = require('crypto-js')
const jwt = require('jsonwebtoken')

const pool = require('../db/db')
const result = require('../utils/result')
const config = require('../utils/config')

const router = express.Router()

//new user registration
router.post('/register', (req, res) => {
    const { first_name, last_name, email, password, mobile, dob } = req.body
    //password encryption
    const encryptedPassword = String(cryptoJs.SHA256(password))
    const sql = `INSERT INTO users(first_name, last_name, email, password, mobile, dob) VALUES(?,?,?,?,?,?)`
    pool.query(
        sql,
        [first_name, last_name, email, encryptedPassword, mobile, dob],
        (error, data) => {
            res.send(result.createResult(error, data))
        }
    )
})

//user login
router.post('/login', (req, res) => {
    const { email, password } = req.body
    //password encryption
    const encryptedPassword = String(cryptoJs.SHA256(password))
    const sql = `SELECT * FROM users WHERE email = ? AND password = ?`
    pool.query(sql, [email, encryptedPassword], (error, data) => {
        //checking if password is correct
        if (data) {
            if (data.length !== 0) {
                const payload = {
                    userId: data[0].id,
                }
                const token = jwt.sign(payload, config.secret)
                const body = {
                    token: token,
                    firstName: data[0].first_name,
                    lastName: data[0].last_name,
                }
                res.send(result.createSuccessResult(body))
            } else res.send(result.createErrorResult('Invalid email or password'))
        } else res.send(result.createErrorResult(error))
    })
})

//change password
// router.put('/password', (req, res) => {
//     const { oldPassword, newPassword } = req.body
//     const userId = req.userId

//     if (!oldPassword || !newPassword) {
//         return res.send(result.createErrorResult('Old and new passwords are required'))
//     }

//     const checkPasswordSql = `SELECT password FROM users WHERE id = ?;`
//     const encryptedNewPassword = String(cryptoJs.SHA256(newPassword))
//     const encryptedOldPassword = String(cryptoJs.SHA256(oldPassword))
//     pool.query(checkPasswordSql, [userId], (error, userData) => {
//         if (error) {
//             return res.send(result.createErrorResult(error))
//         }
//         if (userData.length === 0) {
//             return res.send(result.createErrorResult('User not found'))
//         }

//         const user = userData[0]
//         if (user.password !== encryptedOldPassword) {
//             return res.send(result.createErrorResult('Old password is incorrect'))
//         }

//         const updatePasswordSql = `UPDATE users SET password = ? WHERE id = ?;`
//         pool.query(updatePasswordSql, [encryptedNewPassword, userId], (error, data) => {
//             res.send(result.createResult(error, data))
//         })
//     })
// })

//get user profile
router.get('/profile', (req, res) => {
    const sql = `SELECT first_name, last_name, mobile, email, dob FROM users WHERE id = ?`
    pool.query(sql, [req.headers.userId], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

//update user profile
router.put('/profile', (req, res) => {
    const { first_name, last_name, mobile, email, dob } = req.body
    const sql = `UPDATE users SET first_name=?, last_name=?, mobile=?, email=?, dob=? WHERE id = ?`
    pool.query(
        sql,
        [first_name, last_name, mobile, email, dob, req.headers.userId],
        (error, data) => {
            res.send(result.createResult(error, data))
        }
    )
})

//get all reviews by a user
router.get('/:userId', (req, res) => {
    const { userId } = req.params

    if (!userId || isNaN(userId)) {
        return res.send(result.createErrorResult('Invalid user ID'))
    }

    const sql = `SELECT reviews.* FROM reviews JOIN users ON reviews.user_id = users.id WHERE user_id = ?;`
    pool.query(sql, [userId], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

module.exports = router
