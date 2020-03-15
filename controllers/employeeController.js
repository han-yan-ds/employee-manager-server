const {
  getEmployees, 
  postEmployee
} = require('../models/employeeModel');

exports.getEmployeeController = async (req, res) => {
  res.json(await getEmployees());
}

exports.postEmployeeController = async (req, res) => {
  res.json(await postEmployee(req.body));
}

exports.patchEmployeeController = async (req, res) => {
  res.send('MESSAGE');
}

exports.deleteEmployeeController = async (req, res) => {
  
}