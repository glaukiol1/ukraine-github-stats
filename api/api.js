const express = require('express');
const parseReq = require('../main');
const app = express();

app.get('/api/:username', (req,res)=>{
    const { username } = req.params
    const title = req.query.title
    res.setHeader("Content-Type", "image/svg+xml")
    parseReq(username, title)
        .then(data => {
            res.send(data).status(200)
        })
        .catch(error => {
            res.setHeader("Content-Type", "plain/text")
            res.send("ERROR!").status(500)
        })
})

app.get('*', (req,res) => {
    res.send("Hello, this page was not found.")
})

module.exports = app