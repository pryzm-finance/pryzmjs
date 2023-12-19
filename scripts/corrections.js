const fs = require('fs');
const path = require('path')

function correctFile(file, patterns) {
    let text = (fs.readFileSync(file)).toString()
    for (const p of patterns) {
        text = text.replace(p.regex, p.subst)
    }
    fs.writeFileSync(file, text)
}

function correctFiles(files, patterns) {
    for (let f of files) {
        correctFile(f, patterns)
    }
}

function correctDir(startPath, patterns, filter = undefined) {
    if (!fs.existsSync(startPath)) {
        throw new Error(`invalid path ${startPath}`)
    }
    const files = fs.readdirSync(startPath);
    for (let i = 0; i < files.length; i++) {
        const filename = path.join(startPath, files[i])
        const stat = fs.lstatSync(filename)
        if (stat.isDirectory()) {
            correctDir(filename, patterns, filter)
        } else if (filter === undefined || filename.match(filter)) {
            correctFile(filename, patterns)
        }
    }
}

module.exports = {
    correctFile,
    correctFiles,
    correctDir
}
