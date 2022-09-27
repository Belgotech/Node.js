const express = require('express');
const path = require('path');
const rootDir = require("../util/util")

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'client', 'add-product.html') )
  // res.sendFile(path.join(__dirname, '../', 'client', 'add-product.html') )
  });

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
