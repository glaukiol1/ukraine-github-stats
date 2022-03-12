const grabCommits = require("./fetchers/grab-commits")

function totalStars(repos) {
    var stars = 0
    repos.forEach(repo => {
        stars+=repo.stargazers_count
    })
    return stars
}

function totalCommits(username) {
    return new Promise((resolve, reject) => {
        grabCommits(username, dat => {
            resolve(parseInt(dat))
        })
    })
}
module.exports = {totalStars,totalCommits}