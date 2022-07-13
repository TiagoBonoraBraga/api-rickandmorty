require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./characters.js');
const connectToDatabase = require('./database.js');

const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());
connectToDatabase();
app.use('/characters', routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
