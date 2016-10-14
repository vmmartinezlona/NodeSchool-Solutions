var http = require('http')
var fs = require('fs')

var port = process.argv[2];

var server = http.createServer(function (request, response)
  {
      response.writeHead(200, {'content-type': 'text/plain'})
      fs.createReadStream(process.argv[3]).pipe(response)
  })

server.listen(port);
