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
    const newEmployee = await knex('employees').insert({
      uuid,
      firstname,
      middlename: middlename || null,
      lastname,
      dob,
      doe,
      active
    }).returning('*');
    resolve(newEmployee);
  } catch (err) {
    reject(`Error with adding employee ${firstname} ${lastname} to database`)
  }
});

exports.patchEmployee = (body) => new Promise(async (resolve, reject) => {
  /**
   * body MUST have uuid
   * body can have other fields
   */
  try {
    const {uuid, ...updatedFields} = body;
    const updatedEmployee = await knex('employees').where({uuid})
    .update(updatedFields).returning('*');
    resolve(updatedEmployee);
  } catch (err) {
    reject(`Error with updating employee with ID=${uuid}`);
  }
});

exports.deleteEmployee = (uuid) => new Promise(async (resolve, reject) => {
  try {
    const removedEmployee = await knex('employees').where({uuid}).delete().returning('*');
    resolve(removedEmployee);
  } catch (err) {
    reject(`Error with deleting employee with ID=${uuid} from database`)
  }
});
