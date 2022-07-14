require('dotenv').config();
const jwt = require('jsonwebtoken');
const { findByIdUserService } = require('../users/users.service');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return req.status(401).send({ message: 'O token não foi informado!' });
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return req.status(401).send({ message: 'O token inválido!' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer^/i.teste(scheme)) {
    return req.status(401).send({ message: 'O token mal formatado!' });
  }

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    const user = await findByIdUserService(decoded.id);

    if (err || !user || !user.id) {
      return req.status(401).send({ message: 'O token inválido!' });
    }
    req.userId = user.id;
    return next();
  });
};
