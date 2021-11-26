const express = require('express')
const  router = express.Router()
const jwt = require('jsonwebtoken')

router.post('/login', (req, res) => {
    const token = jwt.sign({_id:'user123'},'secretKey123')
    res.status(201).send({token})}
    )

router.get('/userVerify', (req,res) => {
    
    const token = req.header('auth-token');
    const user = jwt.verify(token, 'secretKey123')
    if(user._id == 'user123'){
        res.status(200).send(true)
    }
    else{
        res.status(403).send(false)
    }
    
})
module.exports = router;