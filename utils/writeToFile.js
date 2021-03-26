const fs = require('fs');

function writeToFile(fileName, data) {    
    return fs.writeFile(fileName, data, function(err) {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = writeToFile;