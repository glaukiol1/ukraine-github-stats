const request = require("./requester");

// var headers = {
//     ":authority": "api.github.com",
//     ":method": "GET",
//     "path": "/search/commits?q=author:glaukiol1",
//     ":scheme": "https",
//     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//     "accept-encoding": "gzip, deflate, br",
//     "accept-language": "en-US,en;q=0.9",
//     "cache-control": "max-age=0",
//     "cookie": "_octo=GH1.1.979498918.1632665237; logged_in=yes; dotcom_user=glaukiol1; color_mode=%7B%22color_mode%22%3A%22dark%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark_dimmed%22%2C%22color_mode%22%3A%22dark%22%7D%7D; tz=Europe%2FRome",
//     "sec-ch-ua": ' " Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99" ',
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "macOS",
//     "sec-fetch-dest": "document",
//     "sec-fetch-mode": "navigate",
//     "sec-fetch-site": "none",
// }

function grabCommits(username, cb) {
    request(`/search/commits?q=author:${username}`, (data) => {
        cb ( data.total_count )
    })
}

module.exports = grabCommits