const parseReq = require('../main');

module.exports = (req, res) => {
    const {username, title} = req.query
    res.setHeader("Content-Type", "image/svg+xml")
    parseReq(username, title)
        .then(data => {
            return res.send(data)
        })
        .catch(error => {
            res.setHeader("Content-Type", "plain/text")
            return res.send("ERROR!")
        })
}