 	var http = require('http');
 	var url = require('url');



 	server = http.createServer(function(req, res) {
 		var objURL = url.parse(req.url, true)
 		var fecha = new Date(objURL.query.iso)
 		var objJSON
 		if (req.method === 'GET') {
 			if (objURL.pathname === '/api/parsetime') {


 				objJSON = {
 					'hour': fecha.getHours(),
 					'minute': fecha.getMinutes(),
 					'second': fecha.getSeconds()
 				};


 			} else if (objURL.pathname === '/api/unixtime') {

 				objJSON = {
 					'unixtime': fecha.getTime()
 				}
 			} else {
 				res.writeHead(404, {
 					'Content-Type': 'application/json'
 				})
 				objJSON = {
 					'Error': ' No has eligido la opcion correcta'
 				}
 			}
 		} else {
 			res.writeHead(405, {
 				'Content-Type': 'application/json'
 			})
 			objJSON = {
 				'error': 'El metodo no es correcto'
 			}
 		}
 		res.end(JSON.stringify(objJSON));


 	});

 	server.listen(process.argv[2], function() {
 		console.log('escuchando el puerto', process.argv[2])
 	});