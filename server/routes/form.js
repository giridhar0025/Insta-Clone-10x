const express = require('express');
const router = express.Router()
const postModel = require('../models/form')



router.get('/', (req, res) => {
    postModel.find().then((data) => {
        res.status(200).json(data)
    }).catch((err) => {
        console.log(err)
        res.status(404).json(err)
    })
   
})

router.post('/add', (req, res) => {

    const date = new Date
    let finalDate = date + ""
    finalDate = finalDate.split(" ");
    finalDate = finalDate.splice(1, 3).join(" ");

    const unique = Date.now();

    const likesCount = Math.floor(Math.random() * 100) + 1;
    console.log(likesCount)
    console.log(unique)

    const postObj = {
        name : req.body.name,
        location : req.body.location,
        likes : likesCount,
        description : req.body.description,
        PostImage : req.body.PostImage,
        date : finalDate,
        postId : unique
    }
    postModel.create(postObj).then((data) => {
        res.status(200).send("Data Added Successfully!")
    }).catch((err) => {
        res.status(400).send(err)
        console.log(err)
    })
})


module.exports = router