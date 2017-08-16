
//使用模块
let fs = require('fs');

//判断文件是否存在，不存在则创建
if (!fs.existsSync('./out.txt')) {
	fs.createWriteStream('./out.txt');
}

//将内容追加到文件
for (let i = 0; i < 10; i++) {

	let data = 'hello nodejs ' + i + ' \n';
	
	fs.appendFile('./out.txt',data,(err)=>{
	
		// console.log(err);
	
	});

}
