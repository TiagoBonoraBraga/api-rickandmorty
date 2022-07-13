const router = require('express').Router();
const controllerCharacter = require('./character.controller');

router.get('/', controllerCharacter.findAllCharactersController);
router.get('/find/:id', controllerCharacter.findByIdCharacterController);



module.exports = router;
