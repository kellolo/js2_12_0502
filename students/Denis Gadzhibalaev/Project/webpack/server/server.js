let express = require('express');
let fs = require('fs');
let server = express();

server.get('/', (req, res) => {
    res.send('catalogData.json - http://localhost:8080/catalog; getBasket.json - http://localhost:8080/basket');
}) 

server.get('/catalog', (req, res) => {
    fs.readFile('./server/db/catalogData.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            res.sendStatus(404);
        }
    })
}) 

server.get('/basket', (req, res) => {
    fs.readFile('./server/db/getBasket.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            res.sendStatus(404);
        }
    })
}) 

server.listen(8080, () => { console.log('server is ON @ 8080') });