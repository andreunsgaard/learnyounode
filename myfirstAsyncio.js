var fs = require('fs')
fs.readFile(process.argv[2],
	function callback(error, data) {
		if (error) {
			console.log(error)
		} else {

			var str = data.toString()

			var arrayLineas = str.split('\n')

			console.log(arrayLineas.length - 1)
		}
	}
)