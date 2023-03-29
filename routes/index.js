var express = require('express');
var router = express.Router();
const {register} = require('../controllers/register');
const {login} = require('../controllers/login');
const {auth} = require('../controllers/auth');

/* GET home page. */
router.post('/register', register);
router.post('/login', login);
router.post('/auth', auth);

module.exports = router;
