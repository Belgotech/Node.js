const express = require('express');
const path = require('path');
const rootDir = require("../util/util")

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'client', 'shop.html'));
});

module.exports = router;
