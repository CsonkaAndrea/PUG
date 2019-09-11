var express = require('express');
var router = express.Router();
const DB = require('../module/db');
const db = new DB();

router.get('/', (req, res, next) => {
    res.render('new-product');
});

router.post('/', async (req, res, next) => {
    let result = await db.create(req.body);
    console.log(result);
    res.redirect('/products');
});


module.exports = router;