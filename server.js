// const fs = require("fs")

// const content = "hello this is from fs core module2"
// fs.writeFile("newfile.js", content, (err)=>{
//     if(err){
//         console.log("something error")
//     }
//     else{
//         console.log("file createdd successfully")
//     }
// })

// fs.rmdir("myfolder", (err)=>{
//     if(err){
//         console.log("something wrong")
//     }
//     else{
//         console.log("folder created")
//     }
// })




// const os = require("os")

// console.log("OS TYPE: ", os.type())
// console.log("free memory: ", os.freemem())






// const http =require("http")


// const server = http.createServer((req, res)=>{
//     if(req.url === '/' && req.method==="GET"){
//         res.end("Home page")
//     }
//     else if(req.url === '/product')
//     {
//         res.end(" Product page")
//     }
//     else if(req.url === '/about')
//     {
//         res.end(" About page")
//     }

//     else{
//         res.statusCode = 404;
//         res.end("Page not found")
//     }

// })



// server.listen("5000", ()=>{
//     console.log("server is running on 5000")
// })


const express = require("express")
const app = express()
const bodyparser = require("body-parser")

const db = require('./config/db')
const Person = require('./model/Person')


const PersonRoutes = require('./Routes/PersonRoutes')


app.use(bodyparser.json())

app.get("/", (req, res) => {
    res.send("Hello server from express ")
})

const login = (req, res, next) =>{

    console.log(new Date().toTimeString())
    next()
}



const login2 = (req, res, next) =>{
    console.log("you are loggedin2")
    next()
}


app.get("/about", login, login2,  (req, res) => {
    res.send("Hello server from about page ")
})

app.listen("5000", () => {
    console.log("server is running on 5000")
})

app.use("/person", PersonRoutes)




