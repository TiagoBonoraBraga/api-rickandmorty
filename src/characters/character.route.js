const router = require('express').Router();
const controllerCharacter = require('./character.controller');
const { validId, validObjectBody } = require('./character.middleware');

router.get('/', controllerCharacter.findAllCharactersController);
router.get('/find/:id', validId, controllerCharacter.findByIdCharacterController);
router.post('/create', validObjectBody, controllerCharacter.createCharacterController);
router.put('/update/:id', validId, validObjectBody, controllerCharacter.updateCharacterController);
router.delete('/delete/:id', validId, controllerCharacter.deleteCharacterController);
router.get('/search',)

module.exports = router;
