const express = require('express');
const path = require('path');
const rootDir = require("../util/util")
const adminData = require('./admin')

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(adminData.products);
  res.sendFile(path.join(rootDir, 'client', 'shop.html'));
});

module.exports = router;
