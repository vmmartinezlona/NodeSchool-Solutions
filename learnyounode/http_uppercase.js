/*var http = require("http");

var input = '';

http.createServer(function(request, response)
  {
      if(request.method == 'POST')
      {
        request.on('data', function(data)
        {
            input += data.toString()
            console.log(input)
        })

        request.on('end', function()
        {
            response.end(input.toUpperCase())
        })

      request.pipe(input.pipe(response))
    }
  }).listen(process.argv[2])
  */



var http = require('http');
var map = require('through2-map')

http.createServer(function(request,response)
  {
    if(request.method == 'POST')
    {
        request.pipe(map(function (chunk)
          {
              return chunk.toString().toUpperCase()
            })).pipe(response)
    }
  }).listen(process.argv[2])
