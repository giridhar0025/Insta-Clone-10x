const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
const formController = require('./routes/form')
const cors = require("cors");


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.use(cors());


mongoose.connect(process.env.MONGO_URL,
{ useNewUrlParser: true, useUnifiedTopology: true }, err => {
    console.log('Successfully connected')
});


app.listen(process.env.PORT, (err) => {
    if (!err) {
        console.log("server is running")
    } else {
        console.log(err)
    }
})

app.use('/form', formController)