const express = require('express');
const { getTodos } = require('../database');

const app = express();
app.use(express.static(`${__dirname}/../dist`));

app.get('/api/todos', (req, res) => {
  getTodos().then(rows => res.json(rows));
});

app.listen(3000, () => {
  console.log('Listening on port 3000.');
});
