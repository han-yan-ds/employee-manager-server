const routerAuth = require('express').Router();
const {loginController} = require('../controllers/loginController');

routerAuth.post('/login', loginController);

// routerAuth.post('/', postController);

module.exports = routerAuth;