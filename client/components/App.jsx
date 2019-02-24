import React, { useState, useEffect } from 'react';

import List from './List';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('/api/todos')
      .then(res => res.json())
      .then((todosFromDb) => {
        setTodos(todosFromDb);
      });
  }, []);

  return todos.length
    ? <List todos={todos} />
    : <div>No todos to do!</div>;
}

export default App;
