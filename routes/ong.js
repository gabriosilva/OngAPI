const router = require('express').Router();

//Controller
const ongController = require('../controllers/ong');

//Routes
router.post('/addOng', ongController.add_ong_post);

router.get('/getOng', ongController.get_ong_get);

router.post('/setVerified', ongController.set_verified_post);
module.exports = router;