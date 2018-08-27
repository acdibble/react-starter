import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

const List = (props) => {
  const { todos } = props;
  const todoItems = todos.map(({ id, task }) => <Todo key={id} task={task} />);

  return (
    <ul>
      {todoItems}
    </ul>
  );
};

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
