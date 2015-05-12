var http = require('http');

var butthead = function (req,res) {
	console.log('server hit')
	res.setHeader('Content-Type', 'text/html')
	res.end('<h2> WORD OF THE WEEK </h2> <p> + word + </p>')
};

var word = ('hello')


var server = http.createServer(butthead);
server.listen(3000);
console.log('server up and running on 3000 . . .');


