var fs = require('fs');
var path = require('path');

module.exports = function(directorio, extension, callback) {
	fs.readdir(directorio, function(error, files) {

		var ficherosfiltrados = Array();
		if (error) {
			return callback(error)
		}
		files.forEach(function(file) {
			var ext = '.' + extension;
			if (path.extname(file) == ext) {
				ficherosfiltrados.push(file);
			}
		})
		callback(null, ficherosfiltrados)
	})
}