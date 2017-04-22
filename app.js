var express = require('express');
var cors = require('cors');
var multer = require('multer');

var upload = multer({ dest: 'uploads/'});
var app = express();

app.use(cors());
app.use(express.static(__dirname + '/public'));

app.post('/', upload.single('file'), function(req, res) {
    res.json(
        {
            size: req.file.size + ' bytes'
        }
    );
});

app.listen(process.env.PORT || 8000, function() {
    console.log('App is working...');
});