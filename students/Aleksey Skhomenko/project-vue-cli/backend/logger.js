const fs = require('fs')
const moment = require('moment')

let file = './backend/db/log.json'

function logger (name, action) {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (!err) {
            let logs = JSON.parse(data)
            logs.push({
                time: moment().format('DD MM YYYY hh:mm:ss'),
                product_name: name,
                userAction: action
            })

            fs.writeFile(file, JSON.stringify(logs, null, ' '), err => {
                if (err) {
                    console.log('ERROR with logs ', err)
                }
            })
        }
    })
}

module.exports = logger
