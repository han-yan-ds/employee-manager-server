const routerEmployees = require('express').Router();
const {
  getEmployeeController,
  postEmployeeController,
  patchEmployeeController,
  deleteEmployeeController
} = require('../controllers/employeeController');

routerEmployees.get('/', getEmployeeController);
routerEmployees.post('/', postEmployeeController);
routerEmployees.patch('/', patchEmployeeController);
routerEmployees.delete('/', deleteEmployeeController);

module.exports = routerEmployees;