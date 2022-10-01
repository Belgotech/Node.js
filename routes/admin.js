const express = require('express');
const path = require('path');
const rootDir = require("../util/util")

const router = express.Router();
const products = []

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'client', 'add-product.html') )
  // res.sendFile(path.join(__dirname, '../', 'client', 'add-product.html') )
  });

// /admin/add-product => POST  
router.post('/add-product', (req, res, next) => {
  products.push({title: req.body.title})
  res.redirect('/');
});

const new1 = [1, 2, 4]
const new2 = [...new1, 3]
console.log(new2);

const secd = {
  secd1 : 'add-product'
}

const secd2 = {
  ...secd,
  secd3 : 'add-product2'
}

console.log(secd2);
console.log(secd);

const check = (...args)=>{
  return args.filter(el => el ===2)
  // return args.find(el => el ===2)
}

console.log(check(1, 2, 3));

// module.exports = router;
exports.routes = router
exports.products = products
