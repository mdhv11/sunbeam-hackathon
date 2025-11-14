const express = require('express')
const cryptoJs = require('crypto-js')
const jwt = require('jsonwebtoken')

const pool = require('../db/db')
const result = require('../utils/result')
const config = require('../utils/config')

const router = express.Router()

router.post('/register', (req, res) => {
    const { first_name, last_name, email, password, mobile, dob } = req.body
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

router.post('/login', (req, res) => {
    const { email, password } = req.body
    const encryptedPassword = String(cryptoJs.SHA256(password))
    const sql = `SELECT * FROM users WHERE email = ? AND password = ?`
    pool.query(sql, [email, encryptedPassword], (error, data) => {
        if (data) {
            if (data.length !== 0) {
                const payload = {
                    userId: data[0].id,
                }
                const token = jwt.sign(payload, config.secret)
                const body = {
                    token: token,
                    firstName: data[0].firstName,
                    lastName: data[0].lastName,
                }
                res.send(result.createSuccessResult(body))
            } else res.send(result.createErrorResult('Invalid email or password'))
        } else res.send(result.createErrorResult(error))
    })
})

router.get('/profile', (req, res) => {
    const sql = `SELECT first_name, last_name, mobile, email, dob FROM users WHERE id = ?`
    pool.query(sql, [req.headers.userId], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

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
module.exports = router
