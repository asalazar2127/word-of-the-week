var http = require('http');

var butthead = function (req,res) {
	console.log('server hit');

var word = random();
var words = ['hello', 'hola', 'hi', 'bonjour', 'chao', 'hey'];
var index = [1,6]
function random(index) {;
	return Math.random() * (6-1)+1;
};	
        res.setHeader('Content-Type', 'text/html');
        res.end('<h2> WORD OF THE WEEK </h2> <p>' + word + '</p>');
};
var server = http.createServer(butthead);
server.listen(3000);
console.log('server up and running on 3000 . . .');


