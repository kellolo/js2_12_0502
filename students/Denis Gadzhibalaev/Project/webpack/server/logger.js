const fs = require('fs');
const moment = require('moment');

function logger (name, action) {
    fs.readFile('./server/db/logger.json', 'utf-8', (err, data) => {
        if (!err) {
            let logs = JSON.parse(data);
            logs.push({
                time: moment().format('DD MM YYYY hh:mm:ss'),
                product_name: name,
                userAction: action
            });
            fs.writeFile('./server/db/logger.json', JSON.stringify(logs, null, ' '), err => {
                if (err) {
                    console.log('ERROR wring logs');
                }
            });
        }
    })
}

module.exports = logger;