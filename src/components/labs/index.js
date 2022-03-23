import React from 'react';
import { Link } from 'react-router-dom';

import Classes from './classes';
import ConditionalOutput from './conditional-output';
import ReduxExamples from './redux-examples';
import Styles from './styles';
import TodoItem from './todo/todo-item';
import TodoList from './todo/todo-list';

const Labs = () => {
  return (
    <>
      <h1>Labs</h1>
      <ConditionalOutput />
      <Styles />
      <Classes />
      <TodoItem />
      <TodoList />
      <ReduxExamples/>
      <Link to="/hello">
        Hello
      </Link> | 
      <Link to="/tuiter">
        Tuiter
      </Link>
      <h1>Non React.js Assignments</h1>
      <ul>
        <li><a href="labs/a2/index.html">Assignment 2 Labs</a></li>
        <li><a href="labs/a3/css/index.html">Assignment 3 Labs</a></li>
        <li><a href="labs/a4/bootstrap/index.html">Assignment 4 Labs</a></li>
        <li><a href="labs/a5/js/index.html">Assignment 5 Labs</a></li>
        <li><a href="tuiter/navigation.html">Tuiter</a></li>
      </ul>
    </>
  );
};

export default Labs;
