const http = require('http');

http.createServer((req, res) => {
    res.write("Hi!");
    res.end();
}).listen(5000);

console.log("Server is listening on port 5000...");