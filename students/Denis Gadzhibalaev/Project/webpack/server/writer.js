const fs = require('fs');
const logger = require('./logger');

function writeFile(file, text, res, log) {
    fs.writeFile(file, text, (err) => {
        if (!err) {
            logger(log.name, log.action);
            res.send ('{"result": 1}');
        } else {
            res.sendStatus (500, '{"result": 0}');
        }
    })
    
}

module.exports = writeFile;