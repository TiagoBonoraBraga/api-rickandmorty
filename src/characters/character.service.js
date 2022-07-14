const Characters = require('./Character');

const findAllCharactersServive = async () => {
  const allCharacters = await Characters.find();
  return allCharacters;
};

const findByIdCharacterService = async (idParams) => {
  const oneCharacter = await Characters.findById(idParams);
  return oneCharacter;
};

const createCharacterService = async (newCharacter) => {
  const createdCharacter = await Characters.create(newCharacter);
  return createdCharacter;
};

const updateCharacterService = async (idParams, editCharacter) => {
  const updateCharacter = await Characters.findByIdAndUpdate(
    idParams,
    editCharacter,
  ).setOptions({ returnOriginal: false });
  return updateCharacter;
};

const deleteCharacterService = async (idParams) => {
  return await Characters.findByIdAndDelete(idParams);
};

const searchCharacterService = (message) =>
  Characters.find({
    message: { $regex: `${message || ''}`, $options: 'i' },
  }).populate('user');

module.exports = {
  findAllCharactersServive,
  findByIdCharacterService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
  searchCharacterService,
};
