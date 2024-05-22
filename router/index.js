var express = require('express');
var router = express.Router();
const strJS = require('../lib/string');

router.get('/', (req, res) => {
    res.send(strJS.index);
});

module.exports = router;