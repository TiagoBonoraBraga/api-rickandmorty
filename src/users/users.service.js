const User = require('./User');

const findByEmailUserService = async (email) => User.findOne({ email: email });

const createUserService = (body) => User.create(body);

module.exports = { findByEmailUserService, createUserService };
