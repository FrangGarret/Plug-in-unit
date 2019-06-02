var http = require('http');
var fs = require('fs');//加载文件模块
var documentRoot = 'E:/Plug-in-unit/websocket/NO2'

var httpServer = http.createServer(function(req,res){
    var url = req.url;
    var file = documentRoot + url;
    fs.readFile(file,function(err,data){
        if( err){
            res.writeHeader(404,{
                'content-type' : 'text/html;charset="utf-8"'
            })
            res.write('<h1>404</h1>')
            res.end()
        }else{
            res.writeHeader(200,{
                'content-type' : 'text/html;charset="utf-8"'
            })
            res.write(data)
            res.end()
        }
    })
}).listen(8888)





















