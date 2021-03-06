const grabCommits = require("./fetchers/grab-commits")
const grabIssues = require("./fetchers/grab-issues")
const grabPrs = require("./fetchers/grab-prs")

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

function totalPrs(username) {
    return new Promise((resolve, reject)=>{
        grabPrs(username, dat => {
            resolve(dat)
        })
    })
}

function totalIssues(username) {
    return new Promise((resolve, reject)=>{
        grabIssues(username, dat => {
            resolve(dat)
        })
    })
}

module.exports = {totalStars,totalCommits,totalPrs,totalIssues}