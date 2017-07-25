
var http = require('http');
http.createServer(function(request,response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	console.log(response);
	var arr = [1,2,3,4,5,6];
	response.end(JSON.stringify(arr));
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');
