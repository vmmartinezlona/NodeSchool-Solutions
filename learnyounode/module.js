var fs = require('fs')
var path = require('path')

module.exports = function(path, ext, callback)
{
  fs.readdir(path, function(err, list)
  {
      list = list.filter(function (file)
    {
      var aux = path.extname(file) === '.' + filterStr
    })
  })
}

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
