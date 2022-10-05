const express = require('express');
const router = express.Router();
const {authentication} = require('../middlewares/auth.js')
const user_routes = require('./folder_routes/user_route.js')
const product_routes = require('./folder_routes/product_route.js')
const category_routes = require('./folder_routes/category_route.js')





router.use('/user',authentication,user_routes)
router.use('/product',authentication,product_routes)
router.use('/category',authentication,category_routes)





module.exports = router;