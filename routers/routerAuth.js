const routerAuth = require('express').Router();
const {loginController} = require('../controllers/getController');

routerAuth.get('/', loginController);

// routerAuth.post('/', postController);

module.exports = routerAuth;