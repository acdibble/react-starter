const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(path.join(__dirname, '..', 'todos.db'), (err) => {
  if (err) {
    console.log('Error connecting to DB.');
  } else {
    console.log('Connected to DB.');
  }
});

const getTodos = () => new Promise((resolve, reject) => {
  db.all('SELECT rowid, * FROM todos', (err, rows) => (err ? reject(err) : resolve(rows)));
});

module.exports = {
  getTodos,
};
