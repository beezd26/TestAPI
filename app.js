
var http = require('http')

function fib(n) {
  if (n < 2) {
    return 1;
  } else {
    return fib(n - 2) + fib(n - 1);
  }
}


var server = http.createServer(function(req, res) {
    res.writeHead(200);
    //var r = fib(43);
    //res.end(r + "\n" + process.argv[2]);
	res.end("onlystage");
});
server.listen(process.argv[2]);
