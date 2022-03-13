var https = require('https')

function request (url, cb, headers) {
    if (!headers) {
        headers = {"User-Agent": "Daddy"}
    }
    headers.authorization = `token ${process.env["TOKEN"]}`
    https.request({
        hostname: 'api.github.com',
        path: url,
        headers
    }, function (res) {
        var body = ''
        res
            .on('data', function (buf) {
                body += buf.toString()
            })
            .on('end', function () {
                try {
                    cb(JSON.parse(body))
                } catch {
                    cb(body)
                }
            })
    }).end()
}
module.exports = request