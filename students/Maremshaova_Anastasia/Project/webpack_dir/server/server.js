let express = require('express') //DOC express
let fs = require('fs') //filestream //DOC node JS
let server = express()

server.use(express.json());

let basket = require('./basket.js');
let writer = require('./writer.js'); 


server.get('/catalog', (req, res) => {
    //res.send('Hello User')
    fs.readFile('./server/database/catalog.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data)
        } else {
            res.sendStatus(404)
        }
    })
})

server.get('/basket', (req, res) => {
    //res.send('Hello User')
    fs.readFile('./server/database/basket.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data)
        } else {
            res.sendStatus(404)
        }
    })
})

server.post('/basket', (req, res)=>{
    let path = './server/database/basket.json'
    fs.readFile(path, 'utf-8', (err, data) => {
        if (!err) {
            let newCart = basket.add(req, JSON.parse(data));
            console.log(newCart); 
            writer(path, JSON.stringify(newCart, null, ' '), res);
        } else {
            res.sendStatus(500)
        }
    })
}); 

server.put('/basket/:id', (req, res)=>{
    let path = './server/database/basket.json';
    fs.readFile(path, 'utf-8', (err, data) => {
        if (!err) {
            let newCart = basket.change(req, JSON.parse(data));
            writer(path, JSON.stringify(newCart, null, ' '), res);
        } else {
            res.sendStatus(500)
        }
    })
}); 

server.delete('/basket/:id', (req, res)=>{
    let path = './server/database/basket.json';
    fs.readFile(path, 'utf-8', (err, data) => {
        if (!err) {
            let newCart = basket.delete(req, JSON.parse(data));
            writer(path, JSON.stringify(newCart, null, ' '), res);
        } else {
            res.sendStatus(500)
        }
    })
}); 

server.listen(8080, () => { console.log('server is ON @ 8080') }); 