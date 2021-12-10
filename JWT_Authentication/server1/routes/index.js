const express = require('express')
const router = express.Router()
const jsonwebtoken = require('jsonwebtoken')


router.get('/login', (req, res) => {
    const token = jsonwebtoken.sign({user:'user123'}, process.env.Token_Secret)
    res.cookie('token', token)
    res.json({token})
})

router.post('/logout', (req, res) => {
    res.clearCookie('token')
    res.sendStatus(204)
})

router.get('/about', (req, res) => {
    res.send('About Page')
})


module.exports = router;