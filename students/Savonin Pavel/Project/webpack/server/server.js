let express = require('express') //DOC express
let fs = require('fs') //filestream //DOC node JS
let server = express()
const bodyParser = require('body-parser');

server.use(bodyParser.json());

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
//post не пашет, пишет "SyntaxError: Unexpected token o in JSON at position 1 at JSON.parse (<anonymous>)..." в консоль сервера
server.post('/addToCart', (req, res) => {
    fs.readFile('./server/database/cart.json', 'utf8', (err, data) => {
      if (err) {
        res.send('{"result": 0}');
      } else {
        let cart = JSON.parse(data);
        let item = req.body;
        
        cart.push(item);
  
        fs.writeFile('./server/database/cart.json', JSON.stringify(cart), (err) => {
          if (err) {
            res.send('{"result": 0}');
          } else {
            res.send('{"result": 1}');
          }
        });
      }
    });
});


server.listen(8080, () => { console.log('server is ON @ 8080') })