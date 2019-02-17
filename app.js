var http = require('http');
var s = http.createServer();
s.on('request', function(request, response) {
    response.writeHead(200);
    console.log('a: '+request.method);
    console.log('b: '+request.headers);
    console.log('c: '+request.url);

    var url = decodeURIComponent(request.url);
    var startPos = url.indexOf('{');
    var endPos = url.indexOf('}');
    var jsonString = url.substring(startPos, endPos+1);
    json = JSON.parse(jsonString);
    console.log(chartOptions.data.dataPoints[0])
});
s.listen(8080);
