const express = require('express');
const path = require('path');
const { getTodos } = require('../database');

const { PORT = 3000 } = process.env;

const app = express();
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/api/todos', (req, res) => {
  getTodos().then(rows => res.json(rows));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
