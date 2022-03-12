const request = require("./requester")

function grabPrs(username, cb) {
    var url = `/search/issues?q=+type:pr+user:${username}&sort=created&order=asc`
    request(url, (data) => {
        cb(data.total_count)
    })
}

module.exports = grabPrs