var http = require('http');
var bl = require('bl');
http.get(process.argv[2], function(res) {
	res.pipe(bl(function(err, data) {
		if (err) return console.log(err.message)
		var datos = data.toString();
		console.log(datos.length)
		console.log(datos)


	}))


}).on('error', function(e) {
	console.log("Got error: " + e.message);
})