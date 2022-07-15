const mongoose = require('mongoose'); //importando do mongoose
const bcrypt = require('bcryptjs');

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

UserSchema.pre('save', async function (next) {
  //função do bcrypt antes d salvar faz a função d bcrypt (nao aceita arrowfunction)
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
