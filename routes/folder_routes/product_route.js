const express = require('express');
const router = express.Router();
const product_controller = require('../../controllers/folder_controllers/product_controller.js')
const {authentication} = require('../../middlewares/auth.js')

router.get('/all',authentication,product_controller.findAll)
router.post('/create',authentication,product_controller.create)
router.put('/udpate',authentication,product_controller.update)
router.delete('/delete',authentication,product_controller.delete)

module.exports = router;
