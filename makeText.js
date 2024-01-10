/** Command-line tool to generate Markov text. */

const fs = require('fs');
const { MarkovMachine } = require('./markov');
const axios = require('axios');
const process = require('process');

function generateText(text) {
    let mm = new MarkovMachine(text)
    console.log(mm.makeText())
}

function makeText(path){
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            console.error(`Cannot read file: ${path}: ${err}`);
            process.exit(1);
        } else {
            generateText(data) 
        }
    })
}

async function makeURLText(url) {
    let resp;
    try {
        resp = await axios.get(url);
    } catch (error) {
        console.error(`Cannot read file: ${url}: ${error}`);
        process.exit(1);
    }
    generateText(resp.data) 
}

if (process.argv[2] === 'file') {
    makeText(process.argv[3])
} else if (process.argv[2] === 'url'){
        makeURLText(process.argv[3])
} else {
    console.error('Invalid input type. Use "file" or "url".')
    process.exit(1)
}



