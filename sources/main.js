var cross = require('./cross-domain');

var FileSave = require('file-saver')
var blob = new Blob(["Hello, word!"], {type: "text/plain;charset=utf-8"})
FileSave.saveAs(blob, 'teste.js');

cross()