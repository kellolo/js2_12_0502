let express = require('express') //DOC express
let fs = require('fs') //filestream //DOC node JS
let server = express()

server.use (express.json()) // EXTREMELY IMPORTANT
server.use('/admin', express.static('./src/static'))
let cart = require('./cart')
let writer = require('./writer')

server.use('/admin', express.static('./src/static'))

server.get('/catalog', (req, res) => {
    //res.send('Hello User')
    fs.readFile('./server/database/catalog.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data)
        } else {
            res.sendStatus(404)
        }
    })
}) //http://localhost:8080/
//server.get('/home') //http://localhost:8080/home/

server.get('/cart', (req, res) => {
    //res.send('Hello User')
    fs.readFile('./server/database/cart.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data)
        } else {
            res.sendStatus(404)
        }
    })
})

server.post('/cart', (req, res) => {
    let path = './server/database/cart.json'
    console.log(req.body)
    fs.readFile(path, 'utf-8', (err, data) => {
        if (!err) {
            let {newCart, name} = cart.add(req, JSON.parse(data))//module cart
            writer(path, JSON.stringify(newCart, null, ' '), res, {action: 'add', name: name})
        } else {
            res.sendStatus(500)
        }
    })
})
server.put('/cart/:id', (req, res) => {
    let path = './server/database/cart.json'
    fs.readFile(path, 'utf-8', (err, data) => {
        if (!err) {
            console.log(req.body)
            let {newCart, name} = cart.change(req, JSON.parse(data))//module cart
            writer(path, JSON.stringify(newCart, null, ' '), res, {action: 'change', name: name})
        } else {
            res.sendStatus(500)
        }
    })
})
server.delete('/cart/:id', (req, res) => {
    let path = './server/database/cart.json'
    fs.readFile(path, 'utf-8', (err, data) => {
        if (!err) {
            let {newCart, name} = cart.delete(req, JSON.parse(data))//module cart
            writer(path, JSON.stringify(newCart, null, ' '), res, {action: 'del', name: name})
        } else {
            res.sendStatus(500)
        }
    })
})

server.listen(8080, () => { console.log('server is ON @ 8080') })


