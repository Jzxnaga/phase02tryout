const express = require('express');
const router = express.Router();
const product_controller = require('../../controllers/folder_controllers/product_controller.js')
const {authentication} = require('../../middlewares/auth.js')

router.get('/all',authentication,product_controller.findAll)
// router.post('/create',authentication,sec_application_controller.create)
// router.post('/login',sec_user_controller.login)

module.exports = router;
