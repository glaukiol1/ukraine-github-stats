const parseReq = require('../main');

module.exports = (req, res) => {
    const {username, title} = req.query.title
    res.setHeader("Content-Type", "image/svg+xml")
    parseReq(username, title)
        .then(data => {
            res.send(data).status(200)
        })
        .catch(error => {
            res.setHeader("Content-Type", "plain/text")
            res.send("ERROR!").status(500)
        })
}