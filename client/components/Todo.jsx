import React from 'react';
import PropTypes from 'prop-types';

const Todo = (props) => {
  const { task } = props;

  return <li>{task}</li>;
};

Todo.propTypes = {
  task: PropTypes.string.isRequired,
};

export default Todo;
