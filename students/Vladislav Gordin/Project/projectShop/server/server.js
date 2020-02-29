let express = require('express') //DOC express
let fs = require('fs') //filestream //DOC node JS
let server = express()

server.get('/catalog', (req, res) => {
    //res.send('Hello User')
    fs.readFile('./server/database/catalogData.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data)
        } else {
            res.sendStatus(404)
        }
    })
}) //http://localhost:8080/
//server.get('/home') //http://localhost:8080/home/

server.get('/basket', (req, res) => {
    //res.send('Hello User')
    fs.readFile('./server/database/getBasket.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data)
        } else {
            res.sendStatus(404)
        }
    })
})
server.listen(8080, () => { console.log('server is ON @ 8080') })