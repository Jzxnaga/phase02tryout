const express = require('express');
const router = express.Router();
const category_controller = require('../../controllers/folder_controllers/category_controller.js')
const {authentication} = require('../../middlewares/auth.js')

router.get('/all',authentication,category_controller.findAll)
// router.post('/create',authentication,sec_application_controller.create)
// router.post('/login',sec_user_controller.login)


module.exports = router;