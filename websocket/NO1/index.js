 var http = require('http');
 var server = http.createServer(function( req , res ){
    console.log('有人进来了');

    res.writeHead(200,{
        'content-type' : 'text/html;charset="utf-8"'
    })
    res.writeHead(404,{
        'content-type' : 'text/html;charset="utf-8"'
    })

    res.write('这是正文部分');
    res.end();

 }).listen(7000);
 console.log('服务器开启成功')
