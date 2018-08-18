const express = require('express');

const app = express();
app.use(express.static(`${__dirname}/../dist`));

app.get('/api', (req, res) => {
  res.json({ message: 'Howdy, world.' });
});

app.listen(3000, () => {
  console.log('Listening on port 3000.');
});
