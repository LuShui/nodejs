var http = require('http');
var fs = require('fs');

http.createServer(function(request,response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	fs.readFile('./input.txt',function(err,data){
		response.end(data.toString());
	});
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');
