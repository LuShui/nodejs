let fs = require('fs');
let date  = 'hello nodejs 1';

let writestream = fs.createWriteStream('out.txt');
writestream.write(date,'UTF8');
writestream.end();

writestream.on('finsh',()=>{
	console.log('finsh');
});

writestream.on('error',()=>{
	console.log('error');
});