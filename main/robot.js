const express = require("express")
const noblox = require("noblox")
const fs = require("fs")

const app = express()
const port = 3000
const group = 5202521

var cookie = null

app.get("/", (req, res) => {
    console.log("hello world!")
    res.send("hello world!")
})

app.get("/debug", async (req, res) => {
    let user = await noblox.getCurrentUser()
    res.json({
        robot: user
    })
})

app.get("/rank", (req, res) => {
    let uid = parseInt(req.query.uid)
    let rank = parseInt(req.query.rank)
    if (!isNaN(uid) && !isNaN(rank))
    {
        noblox.setRank(group, uid, rank).then(() => {
            res.send("Ranking User")
        }).catch(() => {
            res.status(500).send("Robot Error")
        })
    }
    else
    {
        res.status(400).send("Bad Request")
    }
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

    noblox.setCookie(cookie)

    app.listen(port, () => {
        console.log(`express is listening on port ${port}`)
    }).on("error", (err) => {
        console.error(`could not listen on port ${port}`)
        console.error("this is probably either a permission issue or it could be that another program is using that port for something else")
        process.exit(1)
    })
})
