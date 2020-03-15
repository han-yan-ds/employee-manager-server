const knexMode = require('../knexfile').development;
const knex = require('knex')(knexMode);

exports.getEmployees = () => new Promise(async (resolve, reject) => {
  try {
    const allEmployees = await knex('employees').select();
    resolve(allEmployees);
  } catch (err) {
    reject('Error with getting employees from database');
  }
});

exports.postEmployee = (body) => new Promise(async (resolve, reject) => {
  console.log('reached this point');
  const {uuid, firstname, middlename, lastname, dob, doe, active} = body;
  try {
    const newEmployee = await knex('employees').insert({
      uuid,
      firstname,
      middlename,
      lastname,
      dob,
      doe,
      active
    }).returning('uuid');
    console.log(newEmployee);
    resolve(newEmployee);
  } catch (err) {
    reject(`Error with adding employee ${firstname} ${lastname} to database`)
  }
});