var express = require('express');
var router = express.Router();
var locationController = require('../controllers/location.controller')

router.get('/',locationController.getlocations)
router.post('/create',locationController.createlocations)
router.delete('/delete',locationController.deletelocations)

module.exports = router;