var http = require('http');

var butthead = function(req,res) {
	console.log('server hit')
}
var server = http.createServer(butthead);
server.listen(3000);
console.log('server up and running on 3000 . . .');


