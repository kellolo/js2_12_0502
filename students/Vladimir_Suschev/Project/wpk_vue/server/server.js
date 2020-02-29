let express = require('express') //DOC express
let fs = require('fs') //filestream //DOC node JS
let server = express()

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


server.listen(8085, () => { console.log('server is ON @ 8085') })