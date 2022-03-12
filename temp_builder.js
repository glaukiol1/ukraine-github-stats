const fs = require('fs')
const path = require('path')
function buildTemplate(fields) {
    var template = fs.readFileSync(path.join(__dirname, "template.svg"), "utf-8")

    template = template.replace("{{title}}",fields.title)
    template = template.replace("{{stars}}",fields.stars)
    template = template.replace("{{commits}}",fields.commits)
    template = template.replace("{{prs}}",fields.prs)
    template = template.replace("{{issues}}",fields.issues)
    template = template.replace("{{repos}}",fields.repos)

    return template
}

module.exports = buildTemplate