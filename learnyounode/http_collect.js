var http = require('http')

var concatStream = []

http.get(process.argv[2], function(response)
  {
      response.setEncoding('utf8')
      response.on('data', function(data)
        {
              concatStream.push(data)
        })
      response.on('end', function()
        {
              var stream =concatStream.join("")
              console.log(stream.length);
              console.log(stream);
        })
})
