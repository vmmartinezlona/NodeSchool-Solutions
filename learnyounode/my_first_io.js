var fs = require('fs') //Loas module fs

var buff = fs.readFileSync(process.argv[2])
var str = buff.toString(); //Read a file

console.log(str.split("/n").length)
