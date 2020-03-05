let express = require('express') //DOC express
let fs = require('fs') //filestream //DOC node JS
let server = express()
let cart = require('./cart')
let writer = require('./writer')


server.get('/catalog', (req, res)=>{
    fs.readFile('./server/database/catalog.json', 'utf-8', (err, data)=>{
        if(!err){
            res.send(data)
        }else{
            res.sendStatus(404)
        }
    })
})

server.get('/cart',(req, res)=>{
    res.send('hello')
})

server.get('/cart', (req, res)=>{
    fs.readFile(path, 'utf-8', (err, data)=>{
        if(!err){
            res.send(data)
        }else{
            res.sendStatus(403)
        }
    })
})

server.post('/cart',(req, res)=>{
    let path = './server/database/cart.json'
    fs.readFile(path, 'utf-8', (err, data)=>{
        if(!err){
            let newCart = cart.add(req, JSON.parse(data))
            writer(newCart)
        }else{
            res.sendStatus(403)
        }
    })
})
server.put('/cart:id',(req, res)=>{
    let path = './server/database/cart.json'
    fs.readFile(path, 'utf-8', (err, data)=>{
        if(!err){
            let newCart = cart.change(req, JSON.parse(data))
            writer(path, JSON.stringify(newCart, null, ' '), res )
        }else{
            res.sendStatus(500)
        }
    })
})
server.delete('/cart:id',(req, res)=>{
    let path = './server/database/cart.json'
    fs.readFile(path, 'utf-8', (err, data)=>{
        if(!err){
            let newCart = cart.delete(req, JSON.parse(data))
            writer(path, JSON.stringify(newCart, null, ' '), res )
        }else{
            res.sendStatus(500)
        }
    })
})

server.listen(8080, () => { console.log('server is ON @ 8080') })

