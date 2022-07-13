const Characters = require('./Character');

const findAllCharactersServive = async () => {
  const allCharacters = await Characters.find();
  return allCharacters;
};

const findByIdCharacterService = async (idParams) => {
  const oneCharacter = await Characters.findById(idParams);
  return oneCharacter;
};

module.exports = { findAllCharactersServive, findByIdCharacterService };
