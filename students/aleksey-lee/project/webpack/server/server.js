let express = require('express')
let fs = require('fs')
let server = express()

server.get('/catalog', (req,res) => {
  fs.readFile('./server/db/catalogData.json', 'utf-8', (err,data) => {
    if (!err) {
      res.send(data)
    } else {
      res.sendStatus(404)
    }
  })
})

server.get('/getBasket', (req,res) => {
  fs.readFile('./server/db/getBasket.json', 'utf-8', (err,data) => {
    if (!err) {
      res.send(data)
    } else {
      res.sendStatus(404)
    }
  })
})

server.listen(8080, ()=>{ console.log('server is ON @ 8080') })