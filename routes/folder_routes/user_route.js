const express = require('express');
const router = express.Router();
const user_controller = require('../../controllers/folder_controllers/user_controller.js')
const {authentication} = require('../../middlewares/auth.js')

router.get('/all',authentication,user_controller.findAll)
router.post('/create',authentication,user_controller.create)
router.put('/udpate',authentication,user_controller.update)
router.delete('/delete',authentication,user_controller.delete)

// router.post('/login',sec_user_controller.login)

module.exports = router;

