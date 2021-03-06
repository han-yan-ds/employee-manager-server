const {login} = require('../models/loginModel');

exports.loginController = async (req, res) => {
  /**
   * req.body is of form {
   *  username:
   *  hash:
   * }
   */
  const {username, hash} = req.body;
  const results = await login(username, hash);
  res.send(results);
}