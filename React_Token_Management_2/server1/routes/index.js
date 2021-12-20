const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.post('/login', (req, res) => {
    const {email, password} = req.body
    if(email == 'abc@gmail.com' && password == 'abc123@'){
        const token = jwt.sign(email, process.env.Token_Secret)
        res.cookie('token', token, {httpOnly: true})
        res.json({token})
    }
    
    else{
        res.sendStatus(401)
    }
})

router.post('/logout', (req, res) => {
    res.clearCookie('token')
    res.sendStatus(204)
})

module.exports = router