const express = require('express');
const router = express.Router();
const User = require('../models/UserModel');
router.post("/primegenerator/:Low/:High/:Choice", (req, res) => {
    // const { Low, High, timeTaken, Choice, Size } = req.body;
    // console.log(`My low is ${Low} , high is ${High} and no of prime numbers is ${Size} and I chose algo ${Choice} and time taken is ${timeTaken} ms`);
    const newUser = new User(req.body);
    newUser.save((err) => {
        if (err) console.log("RED SIGNAL :::: ERROR IN CREATING USER DATABASE");
        else console.log("GREEN SIGNAL :::::");
    })
    res.send("Data received sucessfully");
})
module.exports = router;