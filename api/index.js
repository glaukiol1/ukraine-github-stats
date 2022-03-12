const parseReq = require('../main');

module.exports = (req, res) => {
    const {username, title} = req.query
    if (!username) {
        return res.send("<h1>Invalid Paramaters</h1>")
    }
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