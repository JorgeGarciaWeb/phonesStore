const express = require("express")
const router = require("express").Router()

const User = require('./../models/User.model')

const { isAuthenticated } = require('../middleware/middleware')

const saltRounds = 10
const jwt = require("jsonwebtoken")

//SIGNUP
router.post('/signup', (req, res,next) => {
    
    const {name, email, password, username } = req.body

    if (password.length < 2) {
        res.status(400).json({ message: 'Password must have at least 3 characters' })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if(foundUser) {
                res.status(400).json({ message: "User already exists." })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)

            return User.create({ name, email, password: hashedPassword, username })
    })
        .then((createdUser) => {

            const { email, username, _id } = createdUser
            const user = { email, username, _id }

            res.status(201).json({ user })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Internal Server Error' })
        })
})



module.exports = router