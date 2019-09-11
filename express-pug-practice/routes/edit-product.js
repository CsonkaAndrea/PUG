var express = require('express');
var router = express.Router();
const DB = require('../module/db');
const db = new DB();

router.get('/:id', async (req, res, next) => {
    const editID = req.params.id;
    let realData = await db.read();
    const choosenProduct = realData.filter(product => product.id == req.params.id)[0];
    res.render('edit-product', {
        title: 'Edit product',
        product: choosenProduct
    });
});

router.post('/:id', async (req, res, next) => {
    let result = await db.update(req.body, req.params.id);
    console.log(result);
    res.redirect('/products');
});







module.exports = router;