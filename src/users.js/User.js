const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, //campo obrigatorio
  },
  username: {
    type: String,
    required: true,
    unique: true, //diz q só pode ter um username por user
  },
  email: {
    type: String,
    required: true,
    unique: true, //diz q só pode ter um username por user
    lowercase: true, //sempre transforma em letra minuscula
  },
  password: {
    type: String,
    required: true,
    select: false, // esconde o password qd criar um novo usuario para segurança no retorno
  },
  avatar: {
    type: String,
    required: true, //campo obrigatorio
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
