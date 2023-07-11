const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
    })

    switch (req.url) {
        case '/':
            break;
        default:
            res.write(`
            <h1>404</h1>
            `)
            break;
    }

    res.write("Hi!");
    res.end();
});

server.listen(5000);

console.log("Server is listening on port 5000...");