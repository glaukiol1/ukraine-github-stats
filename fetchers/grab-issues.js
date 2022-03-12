const request = require("./requester")

function grabIssues(username, cb) {
    var url = `/search/issues?q=+type:issue+user:${username}&sort=created&order=asc`
    request(url, (data) => {
        cb(data.total_count)
    })
}

module.exports = grabIssues