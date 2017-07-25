
var http = require('http');
var event = require('events');
var e = new event.EventEmitter();

http.createServer(function(request,response){
	response.writeHead(200, {'Content-Type': 'text/plain'});

	let array = [];
	e.on('first',function(){
		array.push('first func');
		this.emit('second');
	});

	e.on('second',function(){
		array.push('second func');
		response.end(JSON.stringify(array));
	})

	e.emit('first');

}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');



