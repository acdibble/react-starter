import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: 'Loading...',
    };
  }

  componentDidMount() {
    axios.get('/api')
      .then(({ data: { message } }) => {
        this.setState({
          message,
        });
      });
  }

  render() {
    const { message } = this.state;

    return <div>{message}</div>;
  }
}

export default App;
