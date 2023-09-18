const express = require('express')


const app = express()


app.get("/", (req, res, next) => {
    console.log("hello world")
    res.send()
})



app.listen(8080, () => {
    console.log("running")
})