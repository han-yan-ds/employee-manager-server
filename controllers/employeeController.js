const {
  getEmployees, 
  postEmployee,
  deleteEmployee
} = require('../models/employeeModel');

exports.getEmployeeController = async (req, res) => {
  res.json(await getEmployees());
}

exports.postEmployeeController = async (req, res) => {
  res.json(await postEmployee(req.body)); // returns new employee after adding new
  // res.json(await getEmployees()); // returns all employees after adding new
}

exports.patchEmployeeController = async (req, res) => {
  res.send('MESSAGE');
}

exports.deleteEmployeeController = async (req, res) => {
  res.json(await deleteEmployee(req.body.uuid)); // returns removed employee after removing
  // res.json(await getEmployees()); // returns all employees after deleting
}