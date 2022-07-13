const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParams = req.idParams.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const character = req.body;
  if (!character.user || !charcter.nome || !character.imagem) {
    return res
      .status(400)
      .send({ message: 'Envie envie todos os campos do character!' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
