const fs = require("fs")
const path = require("path");

const args = require("minimist")(process.argv.slice(2));

const templates = ["fc", "class"];
const styles = ["scss-module", "scss", "css", "css-module"];
const languages = ["ts", "js"]

const name = args.n || args.name || args._[0] || "default";
const p = args.p || args.path || args._[1] || "./";
const requiredTemplate = args.t || args.template || templates[0];
const requiredStyles = args.s || args.style || styles[0];
const requiredLanguage = args.l || args.language || languages[0];


const template = templates.includes(requiredTemplate) ? requiredTemplate : templates[0];
const style = styles.includes(requiredStyles) ? requiredStyles : styles[0];
const language = languages.includes(requiredLanguage) ? requiredLanguage : languages[0];

const absolutePath = path.resolve(__dirname, p, name);

console.log(
`
    Creating component in "${absolutePath}"

    name: ${name}
    type: ${template}
    lang: ${language}
    styles: ${style}

`
)

fs.mkdir(absolutePath, { recursive: true }, () => {
    writeIndex(template, language, name, absolutePath);
    writeBody(template, language, name, absolutePath, style);
    writeStyle(name, style)
})

function writeIndex(template, language, name, absolutePath) {

    const toWriteData = template === "js" ? 
`import { memo } from 'react';

import P from "./${name}"

export default memo(P)
` :
`import { memo } from 'react';

import P, { I${name} } from './${name}'

export default memo<I${name}>(P)
`

    fs.writeFile(path.join(absolutePath, `index.${language}`), toWriteData, () => {
        console.log(`# index.${language} created`)
    })
}

function writeBody(template, language, name, absolutePath, style) {

    const isModule = style.includes("module");
    const toWriteData = language === "js" ? 
`import React from 'react';

import ${isModule ? `cn from './${name}.module.${style.split("-")[0]}'` : `./${name}.${style}`}

const ${name} = props => {
    return (
        <div${isModule ? " className = {cn.root}" : ""}>

        </div>
    )
}

export default ${name}
`:
`import React, { FC } from 'react';

import ${isModule ? `cn from './${name}.module.${style.split("-")[0]}'` : `./${name}.${style}`}

export interface I${name} {

}

const ${name}: FC<I${name}> = props => {
    return (
        <div${isModule ? " className = {cn.root}" : ""}>
            
        </div>
    )
}

export default ${name}
`

    fs.writeFile(path.join(absolutePath, `${name}.${language}x`), toWriteData, () => {
        console.log(`# ${name}.${language}x created`)
    })
}

function writeStyle(name, style) {

    const ext = style.split("-")[0];
    const isModule = style.includes("module");

    fs.writeFile(path.join(absolutePath, `${name}.${isModule ? "module." : ""}${ext}`), "", () => {
        console.log(`# ${name}.${isModule ? "module." : ""}${ext} created`)
    })
}