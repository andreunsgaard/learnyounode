     var http = require('http')
     var fs = require('fs')
     var server = http.createServer(function(req, res) {

          var fichero = fs.createReadStream(process.argv[3])
          fichero.pipe(res)
     })

     server.listen(process.argv[2], function() {
          console.log("Escuchando en el puerto:", process.argv[2])
     })