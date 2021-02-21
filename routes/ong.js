const router = require('express').Router();
const Ong = require('../models/Ong');

//Controller
const ongController = require('../controllers/ong');

//Routes
router.post('/addOng', ongController.add_ong_post);

router.get('/getOng', ongController.get_ong_get);

module.exports = router;