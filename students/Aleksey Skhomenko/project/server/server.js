let express = require ('express')
let fs = require('fs')
let server = express()
let port = 8080
let started_msg = 'server listening on port '+port

server.listen(port, () => {console.log(started_msg)})

route('/cart', './server/db/cartDataResponse.json')
route('/catalog', './server/db/catalogDataResponse.json')
route('/', './server/index.html')

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
}

