import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './TodoList';

import './app.css';

class App extends React.Component {

  render() {

    return (

      <div id="container" className="container vertical-center" >
          <h2 className="title">Todo List with React and Bootstrap</h2>
          <TodoList/>
        </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);