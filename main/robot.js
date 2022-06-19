const express = require("express")
const noblox = require("noblox")

const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("hello world!");
})

app.listen(port, () => {
    console.log(`express is listening on port ${port}`)
})
