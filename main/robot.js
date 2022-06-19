const express = require("express")
const noblox = require("noblox")
const fs = require("fs")

const app = express()
const port = 3000

var cookie = null
var session = null

app.get("/", (req, res) => {
    res.send("hello world!")
})

app.get("/debug", (req, res) => {
    res.json({
        foo: "bar"
    })
})

fs.readFile("SECRET.har", "utf8", (err, data) => {
    if (err) {
        console.error("file [SECRET.har] was not found")
        process.exit(1)
    }

    try {
        cookie = data.match(/\.ROBLOSECURITY=(.*?);/)[1]
    }  catch {
        console.error("could not find the cookie in the given [SECRET.har] file")
        process.exit(1)
    }

    console.log("got the session cookie")
    console.log(cookie)

    app.listen(port, () => {
        console.log(`express is listening on port ${port}`)
    }).on("error", (err) => {
        console.error(`could not listen on port ${port}`)
        console.error("this is probably either a permission issue or it could be that another program is using that port for something else")
        process.exit(1)
    })
})
