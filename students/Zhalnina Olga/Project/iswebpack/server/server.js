let express = require('express')
let fs = require('fs')
let server = express()

server.get('/', (req, res) => {
    fs.readFile('./server/database/catalog.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data)
        } else {
            res.sendStatus(404)
        }
    })
})  // http://localhost:8080/

server.listen(8080, () => { console.log('server is ON @ 8080') })