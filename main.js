var http = require('http');
//var fs = require('fs');

var load = require('./fetching');


var app = http.createServer(async function(request,response){
    var url = request.url;
    
    await load.process();
    //console.log(load.level);
    console.log(load.chars);
    response.writeHead(200);
    //response.write("hello,world");
    var template = `character name
    ${load.chars[0]}
    level
    ${load.level[0]}
    job
    ${load.job[0]}`
    //response.write(load.job[0]);
    //response.end(fs.readFileSync(__dirname + url));
    response.end(template);
 
});
app.listen(3000);