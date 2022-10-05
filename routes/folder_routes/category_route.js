const express = require('express');
const router = express.Router();
const category_controller = require('../../controllers/folder_controllers/category_controller.js')
const {authentication} = require('../../middlewares/auth.js')

router.get('/all',authentication,category_controller.findAll)
router.post('/create',authentication,category_controller.create)
router.put('/update',authentication,category_controller.update)
router.delete('/delete',authentication,category_controller.delete)


module.exports = router;