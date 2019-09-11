var express = require('express');
var router = express.Router();
const DB = require('../module/db');
const db = new DB();

router.get('/', async function (req, res, next) {
    let realData = await db.read();

    res.render('products', {
        title: 'Products',
        products: realData
    });

});

router.get('/delete/:id', async (req, res, next) => {
    const deleteID = req.params.id;
    console.log(deleteID);
    await db.delete(deleteID);

    res.redirect('/products');

});

module.exports = router;