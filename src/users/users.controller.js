const userService = require('./users.service');
const authService = require('../auth/auth.service');//por causa do token chama o auth.service

//primeiro compara c estão tds os campos, c estiver correto vem para achar c já existe o user pelo foundUser
// c não existir ele vai criar novo user

const createUserController = async (req, res) => {
  const { name, username, email, password, avatar } = req.body;

  if (!name || !username || !email || !password || !avatar) {
    //ver c veio tds os campos pela req
    return res.status(400).send({
      //c não veio tds os campos retorna a mensagem e o erro
      message:
        "Alguns campos estão faltando. Os campos são: 'name', 'username', 'email', 'password', 'avatar'.",
    });
  }

  const foundUser = await userService.findByEmailUserService(email); //procurar user no banco pelo email

  if (foundUser) {
    //c o email já existe passa a mensagem
    return res.status(400).send({ message: 'Usuário já existe!' });
  }

  const user = await userService //c o usuario nao existir ele cria o novo usuario pegando a req do body
    .createUserService(req.body)
    .catch((err) => console.log(err.message)); //c tiver erro mostro no console.log

  if (!user) {
    return res.status(400).send({ message: 'Erro ao criar usuário!' }); //c nao conseguir criar usuario da a message
  }

  const token = authService.generateToken(user.id);

  res.status(201).send({
    user: {
      id: user.id,
      name,
      username,
      email,
      avatar,
    },
    token,
  });
};

const findAllUserController = async (req, res) => {
  const users = await userService.findAllUserService();

  if (users.length === 0) {//c user não vier nada manda a message
    return res
      .status(400)
      .send({ message: 'Não existem usuários cadastrados!' });
  }

  res.send(users);
};

module.exports = { createUserController, findAllUserController };
