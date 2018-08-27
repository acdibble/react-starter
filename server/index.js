const express = require('express');

const app = express();
app.use(express.static(`${__dirname}/../dist`));

app.get('/api/todos', (req, res) => {
  res.json([
    {
      id: 1,
      task: 'Greet world.',
    },
    {
      id: 2,
      task: 'echo',
    },
    {
      id: 3,
      task: 'Come up with original app idea.',
    },
  ]);
});

app.listen(3000, () => {
  console.log('Listening on port 3000.');
});
