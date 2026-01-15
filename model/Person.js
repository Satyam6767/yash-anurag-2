const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    firstname: {
        type : String,
        required: true
    },
    lastname: {
        type : String,
        required: true
    },
    contact: {
        type : Number,
        required: true
    },
    role:{
        type: String,
        required: true,
        enum: ["admin", "buyer", "seller"]
    },
    email:{
        type:String,
        required: true,
        unique: true
    }
})

const Person = mongoose.model("Person", personSchema, 'Person')

module.exports = Person