const cal = require("./calculate_stats");
const grabRepos = require("./fetchers/grab-repos");
const buildTemplate = require("./temp_builder");

function parseReq(username, title) {
    if (!title) {
        title = `${username}'s GitHub Stats`
    }
    return new Promise( (resolve, reject) => {
        grabRepos(username, async (repos) => {
            const stars = cal.totalStars(repos)
            const commits = await cal.totalCommits(username)
            const prs = await cal.totalPrs(username)
            const issues = await cal.totalIssues(username);
        
            console.log()
            if (!stars || !commits || !prs || !issues || !repos) {
                reject("Error")
            }
            resolve(
                buildTemplate({title,stars,commits,prs,issues,repos:repos.length})
            )
        })
    })
    
}

module.exports = parseReq