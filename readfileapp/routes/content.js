var express = require('express');
var router = express.Router();

//To read file
var fs = require('fs');
var file_content = '';
fs.readFile(__dirname + '/../public/textfiles/filetoread.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    //console.log(data);
    //file_content = data;
    //file_content = JSON.stringify(data);
    output = {
        "content": data
    };
    file_content = JSON.stringify(output);
    console.log(file_content);
    
});

/* GET file content /public/filetoread.txt. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.render('content', { text: file_content });
  res.setHeader('Content-Type', 'application/json');
  res.send(file_content);
});

module.exports = router;
