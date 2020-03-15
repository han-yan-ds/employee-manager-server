const {
  getEmployees, 
  postEmployee,
  patchEmployee,
  deleteEmployee
} = require('../models/employeeModel');

exports.getEmployeeController = async (req, res) => {
  res.json(await getEmployees());
}

exports.postEmployeeController = async (req, res) => {
  res.json(await postEmployee(req.body)); // returns new employee after adding new
}

exports.patchEmployeeController = async (req, res) => {
  res.json(await patchEmployee(req.body)); // returns updated employee after updating
}

exports.deleteEmployeeController = async (req, res) => {
  res.json(await deleteEmployee(req.body.uuid)); // returns removed employee after removing
}