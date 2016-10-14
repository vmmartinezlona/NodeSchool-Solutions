var fs = require('fs')

fs.readFile(process.argv[2], function (err, contents)
  {
    var lines = contents.toString()
    console.log(lines.split('\n').length - 1)
  })
