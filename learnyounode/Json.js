var http = require('http')
var url = require('url')

var result = ''
var date = ''

http.createServer(function(request, response)
  {
      var URL = url.parse(request.url, true);

      if(URL.pathname == '/api/parsetime')
      {
          result = URL.query.iso
          date = new Date(result)
          result = {
                      "hour": date.getHours(),
                      "minute": date.getMinutes(),
                      "second": date.getSeconds()
                    }
      }
      else if (URL.pathname == '/api/unixtime')
      {
          result = URL.query.iso;
          date = new Date(result);
          result = {"unixtime": date.getTime()}
      }
      if(result)
      {
          response.writeHead(200, {'Content-Type': 'application/json'});
          response.end(JSON.stringify(result))
      }
      else
      {
          response.writeHead(404)
          response.end()
      }
  }).listen(process.argv[2])
