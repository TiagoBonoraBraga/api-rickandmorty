const mongoose = require('mongoose');
const characterService = require('./character.service');

const findAllCharactersController = async (req, res) => {
  const allCharacters = await characterService.findAllCharactersServive();

  if (!allCharacters.lenght === 0) {
    return res.status(404).send({ message: 'Nenhuma character cadastrado!' });
  }

  res.send(allCharacters);
};

const findByIdCharacterController = async (req, res) => {
  const idParams = req.params.id;
  const oneCharacter = await characterService.findByIdCharacterService(
    idParams,
  );

  if (!oneCharacter) {
    return res.status(404).send({ message: 'Character não encontrado' });
  }

  res.send(oneCharacter);
};

module.exports = { findAllCharactersController, findByIdCharacterController };
