const userService = require('./users.service');

//primeiro compara c estão tds os campos, c estiver correto vem para achar c já existe o user pelo foundUser
// c não existir ele vai criar novo user
const createUserController = async (req, res) => {
  const { name, username, email, password, avatar } = req.body;

  if (!name || !username || !email || !password || !avatar) {
    return res.status(400).send({
      message:
        "Alguns campos estão faltando. Os campos são: 'name', 'username', 'email', 'password', 'avatar'.",
    });
  }

  const foundUser = await userService.findByEmailUserService(email);

  if (foundUser) {
    return res.status(400).send({ message: 'Usuário já existe!' });
  }

  const user = await userService
    .createUserService(req.body)
    .catch((err) => console.log(err.message));

  if (!user) {
    return res.status(400).send({ message: 'Erro ao criar usuário!' });
  }

  res.status(201).send(user);
};

const findAllUserController = async (req, res) => {
  const users = await userService.findAllUserService();

  if (users.length === 0) {
    return res
      .status(400)
      .send({ message: 'Não existem usuários cadastrados!' });
  }

  res.send(users);
};

module.exports = { createUserController, findAllUserController };