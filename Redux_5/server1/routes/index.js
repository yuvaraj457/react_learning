const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.post('/login', (req, res) => {
    const token = jwt.sign({user : 'abc12345'}, process.env.Token_Secret)
    res.cookie('token', token, {httpOnly: true})
    res.json({token})
})

router.post('/logout', (req, res) => {
    res.clearCookie('token')
    res.sendStatus(204)
})

module.exports = router