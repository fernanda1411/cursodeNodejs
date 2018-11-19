var http = require('http');

var serverCallback = function(req,res){
    res.end("<html><body>Portal de Notícias</body></html>");
};

var server = http.createServer(serverCallback);

server.listen(3000);
