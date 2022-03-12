const cal = require("./calculate_stats");
const grabRepos = require("./fetchers/grab-repos");
const buildTemplate = require("./temp_builder");

const username = "glaukiol1"
const title = "glaukiol1's GitHub Stats"

grabRepos(username, async (repos) => {
    const stars = cal.totalStars(repos)
    console.log("Stars: ", stars)
    const commits = await cal.totalCommits(username)
    console.log("Commits: ", commits)
    const prs = await cal.totalPrs(username)
    console.log("PRs: ", prs)
    const issues = await cal.totalIssues(username);
    console.log("Issues: ", issues)

    console.log()

    console.log(
        buildTemplate({title,stars,commits,prs,issues,repos:repos.length})
    )
})