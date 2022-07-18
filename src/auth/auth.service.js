const User = require('../users/User');
const jwt = require('jsonwebtoken');

const loginService = (email) =>
  User.findOne({ email: email }).select('+password'); // esse select vai trocar nessa busca la no model para select true e nao false

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.SECRET, { expiresIn: '86400' });
};

module.exports = { loginService, generateToken };
