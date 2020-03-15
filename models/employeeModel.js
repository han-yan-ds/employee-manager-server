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
  const {uuid, firstname, middlename, lastname, dob, doe, active} = body;
  try {
    await knex('employees').insert({
      uuid,
      firstname,
      middlename,
      lastname,
      dob,
      doe,
      active
    });
    resolve(await this.getEmployees());
  } catch (err) {
    reject(`Error with adding employee ${firstname} ${lastname} to database`)
  }
});