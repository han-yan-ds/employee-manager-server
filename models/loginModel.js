const knexMode = require('../knexfile').development;
const knex = require('knex')(knexMode);

exports.login = (username, hashval) => new Promise(async (resolve, reject) => {
  try {
    const results = await knex('auth').where({username, hashval});
    if (results[0]) {
      resolve(true); // found user
    } else {
      resolve(false); // couldn't find username and password combo
    }
  } catch (err) {
    reject(`Error with Database Query`);
  }
})