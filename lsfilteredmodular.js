 var filtermodule = require('./filtermodule');
 var callback = function(error, files) {
 	if (error)
 		console.log(error);
 	else {
 		files.forEach(function(file) {
 			console.log(file);
 		})
 	}
 }
 filtermodule(process.argv[2], process.argv[3], callback)