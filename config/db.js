const mongoose = require("mongoose")
require('dotenv').config()



// const mongoURL = 'mongodb://localhost:27017/yash-anurag-2'
const mongoURL = process.env.mongoURL
mongoose.connect(mongoURL, 
    // {
    //     UseNewUrlParser: true,
    //     UseUnifiedTopology: true
    // }
)
const db = mongoose.connection;
db.on('connected', ()=>{
    console.log("DB isConnected")
})
db.on('error', (err)=>{
    console.log("error while connecting db", err)
})