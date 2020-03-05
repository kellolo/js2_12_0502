let express = require('express') //DOC express
let fs = require('fs') //filestream //DOC node JS
let server = express()

server.use(express.json())

let cart = require('./cart')
let writer = require('./writer')

server.use('/admin', express.static('./src/static'))


server.get('/catalog', (req, res) => {
    fs.readFile('./server/database/catalog.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data)
        } else {
            res.sendStatus(404)
        }
    })
})
server.get('/cart', (req, res) => {
    fs.readFile('./server/database/cart.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data)
        } else {
            res.sendStatus(404)
        }
    })
})
 //http://localhost:8080/
//server.get('/home') //http://localhost:8080/home/




server.post('/cart', (req, res) => {
    let path = './server/database/cart.json'
    fs.readFile(path, 'utf-8', (err, data) => {
        if (!err) {
            let {newCart, name} = cart.add(req, JSON.parse(data)) // module Cart
            writer(path, JSON.stringify(newCart, null, ' '), res, {name: name, action: 'add'})
        } else {
            res.sendStatus(404)
        }
    })
})

server.put('/cart/:id', (req, res) => {
    let path = './server/database/cart.json'
    fs.readFile(path, 'utf-8', (err, data) => {
        if (!err) {
            let {newCart, name} = cart.change(req, JSON.parse(data)) // module Cart
            writer(path, JSON.stringify(newCart, null, ' '), res, {name: name, action: 'change'})
        } else {
            res.sendStatus(500)
        }
    })
})

server.delete('/cart/:id', (req, res) => {
    let path = './server/database/cart.json'
    fs.readFile(path, 'utf-8', (err, data) => {
        if (!err) {
            let {newCart, name} = cart.delete(req, JSON.parse(data)) // module Cart
            writer(path, JSON.stringify(newCart, null, ' '), res, {name: name, action: 'del'})
        } else {
            res.sendStatus(500)
        }
    })
})


server.listen(8080, () => { console.log('server is ON @ 8080') })