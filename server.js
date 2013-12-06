var http = require("http");
var url = require("url");

function start(route,handle)
{
  http.createServer(function(request,response){
    console.log("get request");
    var pathname = url.parse(request.url).pathname;
    console.log("request pathname:"+pathname);
    route(handle,pathname,response,request);
   
  }).listen(8888);
  console.log("Server Start...");
}

exports.start=start;
