const querystring = require('querystring');
const url = require('url');

class UrlController{
	constructor(){
		this.myURL = url.parse('https://www.mimijiaqi.cm?foo=bar&abc=xyz&abc=123#hash');
	}

	_urllog(){
		console.log(this.myURL.hash);
		console.log(this.myURL.host);
		console.log(this.myURL.hostname);
		console.log(this.myURL.href);
		console.log(this.myURL.origin);
		console.log(this.myURL.pathname);
		console.log(this.myURL.protocol);
		console.log(this.myURL.search);
	}

	_querylog(){
		let qus = querystring.parse(this.myURL,'/');
		console.log(JSON.stringify(qus));
	}
}

module.exports = UrlController;
