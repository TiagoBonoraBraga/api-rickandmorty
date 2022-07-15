require('dotenv').config();
const jwt = require('jsonwebtoken');
const { findByIdUserService } = require('../users/users.service');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;//pegar atraves do headers do front autorization

  if (!authHeader) {
    return res.status(401).send({ message: 'O token não foi informado!' });
  }

  const parts = authHeader.split(' ');//ver c o token esta correto, split separa com espaçoo authheader e tranformar num array

  if (parts.length !== 2) {//verificar c o array tem 2 posições
    return res.status(401).send({ message: 'O token inválido!' });
  }

  const [scheme, token] = parts;//descontroi o array o scheme éo bearer e o token token eadd o parts

  if (!/^Bearer$/i.test(scheme)) {//verificar c a palavra scheme é o bearer do front
    return res.status(401).send({ message: 'O token mal formatado!' });
  }

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {//verifica o token o process
    
    const user = await findByIdUserService(decoded.id);// ver c o token recebido é o msm q o token logado

    if (err || !user || !user.id) {
      return res.status(401).send({ message: 'O token inválido!' });
    }
    req.userId = user.id;//mandando pra req da rota um idUser e evia pro controller user.id
    return next();
  });
};
