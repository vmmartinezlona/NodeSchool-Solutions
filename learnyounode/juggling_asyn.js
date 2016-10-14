var http = require('http');
var URL = []
for(var i = 0; i < 3; i++)
{
    URL[i] = process.argv[2 + i]
}
var request = 0;
var results = [];


function run(id)
{
    request++
    http.get(URL[id], function(response)
      {
        var output = ''
        response.setEncoding('utf8');
        response.on("data", function(data)
          {
            output += data;
          })
        response.on("end", function()
          {
            request--
            results[id] = output
            if (request === 0)
              for (var j = 0; j < results.length; j++)
                console.log(results[j]);
        })
    })
}

for(var j = 0; j < URL.length; j++)
{
    run(j);
}
