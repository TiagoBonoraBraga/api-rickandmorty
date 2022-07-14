const User = require('./User');

const findByEmailUserService = async (email) => User.findOne({ email: email });

const createUserService = (body) => User.create(body);

const findAllUserController = () => User.find();

const findByIdUserService = (idUser) => User.findById(idUser);

module.exports = {
  findByEmailUserService,
  createUserService,
  findAllUserController,
  findByIdUserService,
};
