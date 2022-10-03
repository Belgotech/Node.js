const express = require('express');
const path = require('path');
const rootDir = require("../util/util")
const adminData = require('./admin')

const router = express.Router();

router.get('/', (req, res, next) => {
  const product = adminData.product
  res.render('shop', {prods: product, docTitle: 'shop'})
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
