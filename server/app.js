//用于创建网站服务器的模块
const http = require('http');
//app对象就是网站服务器对象
const app = http.createServer();
//当客户端有请求来的时候     req表示请求     res表示响应
app.on('request', (req, res) => {
    res.end('<h2>hello user</h2>');
});

app.listen(3000);
console.log('网站服务器启动成功 访问 localhost:3000');