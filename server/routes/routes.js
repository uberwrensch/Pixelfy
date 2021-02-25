const router = require('express').Router();
const controller = require('../controllers/controllers.js');

router.get('/images/:query', controller.images.get);

module.exports = router;