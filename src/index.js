require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./characters/character.route');
const connectToDatabase = require('./database/database');
const userRoute = require('./users/user.route');
const authRoute = require('./auth/auth.controller');

const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());
connectToDatabase();

app.use('/characters', routes);
app.use('/users', userRoute);
app.use('/auth', authRoute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
