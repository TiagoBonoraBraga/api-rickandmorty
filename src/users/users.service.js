const User = require('./User');//faz acesso a model pelo banco

const findByEmailUserService = async (email) => User.findOne({ email: email });//recebe o emailpor parametro e vai na model do banco procurar o email pelo findone, comparando email recebido com o do banco c ele achar retorna o email 

const createUserService = (body) => User.create(body);//recebe o body vai na model do banco e cria novo usuario e retorna pro controller

const findAllUserService = () => User.find();//vai na banco e procura pelo find

const findByIdUserService = (idUser) => User.findById(idUser);

module.exports = {
  findByEmailUserService,
  createUserService,
  findAllUserService,
  findByIdUserService,
};
