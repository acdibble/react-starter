import React, { Component } from 'react';

import List from './List';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(todos => this.setState({ todos }));
  }

  render() {
    const { todos } = this.state;

    return todos.length
      ? <List todos={todos} />
      : <div>No todos to do!</div>;
  }
}

export default App;
