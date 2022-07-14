const User = require('../users/User');

const loginService = (email) => User.findOne({ email: email }).select('+password');// esse select vai trocar nessa busca la no model para select true e nao false

module.exports = { loginService };
