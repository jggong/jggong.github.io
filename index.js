var app = require('express')();
var http = require('http').Server(app);

var chartOptions = {
    theme: "theme2",
    title:{
      text: "Basic Column Chart - CanvasJS"
    },
    data: [
    {
      type: "column",
      dataPoints: [
        { label: "apple",  y: 10  },
        { label: "orange", y: 15  },
        { label: "banana", y: 25  },
        { label: "mango",  y: 30  },
        { label: "grape",  y: 28  }
      ]
    }
    ]
  };

var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index2.html');
});


io.on('connection', function(socket){
  io.emit('dataMsg', chartOptions);

  socket.on('disconnect', function(){//
    console.log('user disconnected');//
  });//
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
