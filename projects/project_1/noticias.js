var http = require('http');

var serverCallback = function(req,res){
    var categoria = req.url;

    if(categoria === '/tecnologia'){
      res.end("<html><body>Portal de Tecnologia</body></html>");
    } else if (categoria === '/moda'){
      res.end("<html><body>Portal de Moda</body></html>");
    } else if (categoria === '/beleza'){
      res.end("<html><body>Portal de Beleza</body></html>");
    } else {
      res.end("<html><body>Portal de Notícias</body></html>");
    }
};

var server = http.createServer(serverCallback);

server.listen(3000);
