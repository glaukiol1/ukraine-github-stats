const cal = require("./calculate_stats");
const grabRepos = require("./fetchers/grab-repos");

const username = "glaukiol1"

grabRepos(username, async (repos) => {
    const stars = cal.totalStars(repos)
    console.log("Stars: ", stars)
    const commits = await cal.totalCommits(username)
    console.log("Commits: "+commits)
})