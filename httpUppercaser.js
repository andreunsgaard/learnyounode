 	var http = require('http')
 	var map = require('through2-map')

 	var port = process.argv[2]

 	http.createServer(function(req, res) {
 		if (req.method === 'POST') {
 			req.pipe(map(function(chunk) {
 					return chunk.toString().toUpperCase()
 				}))
 				.pipe(res)
 		
 		

 	}else{res.end("Se require método POST")}
 	}).listen(port)