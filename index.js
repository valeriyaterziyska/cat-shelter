const http = require('http');

const cats = require('./cats.json');
const breeds = require('./breeds.json');
const homePage = require('./views');
const addBreedPage = require('./views/addBreed');
const addCat = require('./views/addCat');
const editCat = require('./views/editCat');
const siteCss = require('./css/site.css');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });


    if (req.url == '/') {
        res.write(homePage);
    } else if(/cats\/\d+\/edit/.test(req.url)) {
        let catId = req.url.split('/')[2];
        let cat = cats.find(x => x.id == catId);
        res.write(editCat(cat));

    } else if (req.url == '/css/site.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css',
        });
        res.write(siteCss);
    } else if(req.url == '/cats/add-breed') {
        res.write(addBreedPage);

    } else if(req.url == '/cats/add-cat') {
        res.write(addCat(breeds));

    } else {
        res.write(`
            <h1>404</h1>
        `);
    }

    res.end();
});

server.listen(5000);

console.log("Server is listening on port 5000...");