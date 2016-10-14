net = require("net")

function time ()
{
    var date = new Date()
    var complete_date = date.getFullYear() + '-' +
                      (date.getMonth() + 1) + '-' +
                      date.getDate() + ' ' +
                      date.getHours() + ':' +
                      date.getMinutes()
    return complete_date
}

var server = net.createServer(function(socket)
  {
      socket.end(time() + '\n')
  })

server.listen(Number(process.argv[2]))
