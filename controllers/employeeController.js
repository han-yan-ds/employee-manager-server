const {
  getEmployees, 
  postEmployee
} = require('../models/employeeModel');

exports.getEmployeeController = async (req, res) => {
  res.json(await getEmployees());
}

exports.postEmployeeController = async (req, res) => {
  // res.send(await postEmployee(req.body));
  res.send('MESSAGE');
}

exports.patchEmployeeController = async (req, res) => {
  
}

exports.deleteEmployeeController = async (req, res) => {
  
}