import React from 'react';
import { Link } from 'react-router-dom';

import Classes from './classes';
import ConditionalOutput from './conditional-output';
import Styles from './styles';
import TodoItem from './todo/todo-item';
import TodoList from './todo/todo-list';

const Labs = () => {
  return (
    <>
      <h1>Labs</h1>
      <ConditionalOutput/>
      <Styles/>
      <Classes/>
      <TodoItem/>
      <TodoList/>
      <Link to="/hello">
        Hello
      </Link> |
      <Link to="/tuiter">
        Tuiter
      </Link>
    </>
  );
};

export default Labs;
