const router = require('express').Router();
const controllerCharacter = require('./character.controller');

router.get('/', controllerCharacter.findAllCharactersController);
router.get('/find/:id', controllerCharacter.findByIdCharacterController);
router.post('/create', controllerCharacter.createCharacterController);
router.put('/update/:id', controllerCharacter.updateCharacterController);
router.delete('/delete/:id', controllerCharacter.deleteCharacterController);

module.exports = router;
