var fs= require('fs') 

var buffer = fs.readFileSync(process.argv[2])

var str= buffer.toString()

var arrayLineas = str.split('\n')

console.log(arrayLineas.length - 1)