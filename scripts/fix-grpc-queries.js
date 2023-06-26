const fs = require('fs');
const path = require('path')

function correctFile(file) {
    const regex = /export const (Query[\S]+?Desc)[\s\S]+?return Query([\s\S]+?)Request\.encode/gm;
    let text = (fs.readFileSync(file)).toString()
    for (const [_, oldDescMethodName, partialDescMethodName] of text.matchAll(regex)) {
        text = text.replace(oldDescMethodName, 'Query' + partialDescMethodName + 'Desc')
    }
    // overwrite
    fs.writeFileSync(file, text)
}

function correctDir(startPath, filter) {
    if (!fs.existsSync(startPath)) {
        throw new Error(`invalid path ${startPath}`)
    }
    const files = fs.readdirSync(startPath);
    for (let i = 0; i < files.length; i++) {
        const filename = path.join(startPath, files[i])
        const stat = fs.lstatSync(filename)
        if (stat.isDirectory()) {
            correctDir(filename, filter)
        } else if (filename.match(filter)) {
            correctFile(filename)
        }
    }
}

exports.correctDir = correctDir