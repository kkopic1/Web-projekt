const express = require('express');
const bodyParser =  require('body-parser');
const path = require('path');

this.app = express();
this.app.use(bodyParser.urlencoded({ extended: false }));
this.app.use(bodyParser.json());

this.app.use(express.static(path.join(__dirname, '../../static')));

this.app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/cataleya/index.html'));
});

this.app.listen(process.env.PORT || 3000);

