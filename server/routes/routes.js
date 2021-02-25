const router = require('express').Router();
const { images, randomImages } = require('../controllers/controllers.js');

router.get('/images/:query', images.get);

router.get('/random-images', randomImages.get);

module.exports = router;