
let path = require('path');
let baseDir = '/foo/bar/baz/asdf/quux.html';

function log(t){
	console.log(t)
}


//返回一个路径的最后一部分
let ret = path.basename(baseDir);
//log(ret);   //quux.html


//返回一个path的目录
let ret2 = path.dirname(baseDir)
//log(ret2);    // /foo/bar/baz/asdf

//返回path的扩展名
let ret3 = path .extname(baseDir);
//log(ret3);

//把一个路径或路径片段的序列解析为一个绝对路径
let ret4 = path.resolve(__dirname,'index.html');
//log(ret4);



