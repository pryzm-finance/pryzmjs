const fs = require('fs');
const path = require('path')

function correctFile(file) {
    // step 1
    let regex = /\):\W*Promise<(\w+)>\W*{\W*const\W*options:\W*any\W*=\W*{\W*params:\W*{}\W*};/gm;
    let subst = `, options: any = {params: {}}): Promise<$1> {`;
    let text = (fs.readFileSync(file)).toString()
    text = text.replace(regex, subst)

    // step 2 TODO?
    // regex = /\):\s*?Promise<\s*?(\S+?)\s*?>\s*?{([\s\S]*?return\s*?await\s*?this.req.get[\s\S]*?\(endpoint)(\)\s*?;\s*?})/gm;
    // // regex = /\):\s*Promise<\s*(\S+)\s*>\s*{([\s\S]*?return\s*await\s*this.req.get[\s\S]*?\(endpoint)(\)\s*;\s*})/gm;
    // subst = `, options: any = {params: {}}): Promise<$1> {$2, options$3`;
    // text = text.replace(regex, subst)

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

correctDir('./src/codegen', /query.lcd.ts/gm);
