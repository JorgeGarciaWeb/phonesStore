const router = require("express").Router()

const Phones = require('./../models/Phones.models')

router.get('/getAllPhones', (req, res) => {
    
    Phones
        .find()
        .then(phone => res.json(phone))
        .catch(err => res.status(500).json(err))

})

module.exports = router