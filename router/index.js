var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    console.log('info about api');
    res.send('Hello World!');
});

module.exports = router;