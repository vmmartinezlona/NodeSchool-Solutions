var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, list)
  {
    list.forEach(function (file)
      {
          if (path.extname(file) == ext)
          { console.log (file)}
       })
  })
