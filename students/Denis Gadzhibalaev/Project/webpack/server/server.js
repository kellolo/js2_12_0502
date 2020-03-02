let express = require('express');
let fs = require('fs');
let server = express();

server.use (express.json());

let basket = require('./basket');
let writer = require('./writer');

server.get('/', (req, res) => {
    res.send('catalogData.json - http://localhost:8080/catalog; basket.json - http://localhost:8080/basket; logger.json - http://localhost:8080/logger');
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

server.get('/logger', (req, res) => {
    fs.readFile('./server/db/logger.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            res.sendStatus(404);
        }
    })
}) 

server.get('/basket', (req, res) => {
    fs.readFile('./server/db/basket.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            res.sendStatus(404);
        }
    })
}) 

server.post('/basket', (req, res) => {
    fs.readFile('./server/db/basket.json', 'utf-8', (err, data) => {
        if (!err) {
            let {newBasket, name} = basket.add(req, JSON.parse(data));
            writer('./server/db/basket.json', JSON.stringify(newBasket, null, ' '), res, {action: 'add', name: name});
        } else {
            res.sendStatus(500);
        }
    })
})
server.put('/basket/:id', (req, res) => {
    fs.readFile('./server/db/basket.json', 'utf-8', (err, data) => {
        if (!err) {
            let {newBasket, name} = basket.change(req, JSON.parse(data));
            writer('./server/db/basket.json', JSON.stringify(newBasket, null, ' '), res, {action: 'change', name: name});
        } else {
            res.sendStatus(500);
        }
    })
})

server.delete('/basket/:id', (req, res) => {
    fs.readFile('./server/db/basket.json', 'utf-8', (err, data) => {
        if (!err) {
            let {newBasket, name} = basket.delete(req, JSON.parse(data));
            writer('./server/db/basket.json', JSON.stringify(newBasket, null, ' '), res, {action: 'delete', name: name});
        } else {
            res.sendStatus(500);
        }
    })
})

server.listen(8080, () => { console.log('server is ON @ 8080') });