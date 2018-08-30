const sqlite3 = require('sqlite3').verbose();
const Promise = require('bluebird');

const db = new sqlite3.Database(`${__dirname}/../todos.db`, (err) => {
  if (err) {
    console.log('Error connecting to DB.');
  } else {
    console.log('Connected to DB.');
  }
});

const getTodos = () => new Promise((resolve, reject) => {
  db.all('SELECT rowid, * FROM todos', (err, rows) => {
    if (err) return reject(err);
    return resolve(rows);
  });
});

module.exports = {
  getTodos,
};