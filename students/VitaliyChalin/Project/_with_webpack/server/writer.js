const fs = require('fs')

function writeFile(file, text, res) {
	fs.writeFile(file, text, err => {
		if(!err) {
			res.send('{"result": 1}')
		} else {
			res.sendStatus(500, '{"result": 0}')
		}
	})
}

module.exports = writeFile