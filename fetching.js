//import parseCharacterAttributes from './parsing';



const axios = require('axios');
const cheerio = require('cheerio');
const parsing = require('./parsing');


let $level = [];
let $job = [];
var chars = parsing.parseCharacter();
var characters = chars.map((s) => {
    //console.log(s);
    return encodeURI(s);
});

function contentLoad(URL){
    return new Promise((resolve, reject) => {
        axios.get(`https://maple.gg/u/${URL}`)
        .then(html => {
            const $ = cheerio.load(html.data);
            const $attr = $('#user-profile > section > div > div.col-lg-8 > div.user-summary > ul>li:nth-child(-n+2)');
        
            $attr.each(function(index, item){
                if (index == 0) {$level.push($(item).text());}
                else {$job.push($(item).text());}
            });
            
        })
        .then(() => {
            resolve();
        });
    })
}

module.exports.process = async function(){
    for (let i = 0; i <characters.length; i++){
        await contentLoad(characters[i]);
        console.log(i);
    }
    console.log($level);
    console.log($job);
}
module.exports.level = $level;
module.exports.job = $job;
module.exports.chars = chars;
//process();