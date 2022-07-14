require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./characters/character.route');
const connectToDatabase = require('./database/database');
const userRoute = require("./users/user.route")

const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());
connectToDatabase();
app.use('/characters', routes);
app.use('/users')

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
