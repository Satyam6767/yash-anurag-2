const mongoose = require("mongoose")
// const mongoURL = 'mongodb://localhost:27017/yash-anurag-2'
const mongoURL = "mongodb+srv://satyamkumar6767_db_user:LH8Z6gEaqrj22BKl@cluster0.vogjkq8.mongodb.net/"
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