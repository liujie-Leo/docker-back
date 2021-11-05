let http = require('http');
let users = [
  { id: 1, name: "Leo" },
  { id: 2, name: "Jerry" },
  { id: 3, name: "Jersry" },
  { id: 4, name: "Jers2ry" },
];

let server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin','*')
  if (req.url === '/api/users') {
    res.end(JSON.stringify(users))
  } else {
    res.end('Not Found')
  }
})

server.listen(2000, () => {
  console.log('test');
  console.log('后端API接口服务已经启动在2000端口上！');
})