class myEvent{
	_baseevent(){
		let event = require('events');
		let eventer = new event.EventEmitter();

		//事件监听添加
		eventer.on('connection',()=>{
			console.log('connet succed');
			setTimeout(()=>{
				eventer.emit('succed');
			},3000);
		});

		//事件监听添加
		eventer.on('succed',()=>{
			console.log('data succed');
		});

		eventer.emit('connection');
	}



}


var e = new myEvent();
e._baseevent();


