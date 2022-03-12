const request = require("./requester")

function grabRepos(user,cb) {
    var repos = []
    request('/users/' + user, function (res) {
        if (!res.public_repos) {
            console.log(res.message)
            return
        }
        var pages = Math.ceil(res.public_repos / 100),
            i = pages,
            completed = 0
        while (i--) {
            request('/users/' + user + '/repos?per_page=100&page=' + (i + 1), check)
        }
        function check (res) {
            repos = repos.concat(res)
            pages--
            if (0 == pages) {
                console.log("done")
                cb(repos)
            }
        }
    })
    
}
 
module.exports = grabRepos