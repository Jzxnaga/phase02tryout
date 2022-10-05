const express = require('express');
const router = express.Router();
const user_controller = require('../../controllers/folder_controllers/user_controller.js')
const {authentication} = require('../../middlewares/auth.js')

router.get('/all',authentication,user_controller.findAll)
// router.post('/create',authentication,sec_application_controller.create)
// router.post('/login',sec_user_controller.login)

module.exports = router;

