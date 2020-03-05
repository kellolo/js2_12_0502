let cart = require('./cart')
let writer = require('./writer')
let express = require ('express')
let fs = require('fs')
let server = express()
let port = 8080
let started_msg = 'server listening on port '+port
//settings
server.use (express.json())
server.listen(port, () => {console.log(started_msg)})

route('/cart', './backend/db/cartData.json')
route('/catalog', './backend/db/catalogDataResponse.json')
route('/', './backend/index.html')

function route (server_path, file_path) {
    server.get(server_path, (req, res) => {
        fs.readFile(file_path, 'utf-8', (err, data) => {
            if (!err) {
                res.send(data)
            } else {
                res.sendStatus(404)
            }
        })
    })
    
    if (server_path === '/cart') { // только для корзины и её методов
        server.post(server_path, (req, res) => {
            fs.readFile(file_path, 'utf-8', (err, data) => {
                if (!err) {
                    let {newCart, name} = cart.add(req, JSON.parse(data))
                    writer(file_path, JSON.stringify(newCart, null, ' '), res, {action: 'add', name: name})
                } else {
                    res.sendStatus(500)
                }
            })
        })

        server.put(server_path+'/:id', (req, res) => {
            fs.readFile(file_path, 'utf-8', (err, data) => {
                if (!err) {
                    let {newCart, name} = cart.change(req, JSON.parse(data))
                    writer(file_path, JSON.stringify(newCart, null, ' '), res, {action: 'change', name: name})
                } else {
                    res.sendStatus(500)
                }
            })
        })

        server.delete(server_path+'/:id', (req, res) => {
            fs.readFile(file_path, 'utf-8', (err, data) => {
                if (!err) {
                    let {newCart, name} = cart.delete(req, JSON.parse(data))
                    writer(file_path, JSON.stringify(newCart, null, ' '), res, {action: 'del', name: name})
                } else {
                    res.sendStatus(500)
                }
            })
        })
    }

}

