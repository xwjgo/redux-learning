import React from 'react';
import Footer from './Footer.jsx';
import AddTodo from '../containers/AddTodo.jsx';
import VisibleTodoList from '../containers/VisibleTodoList.jsx';
import _ from 'lodash';

const App = () => (
    <div>
        <h1>{_.join(['hello', 'redux'], '-')}</h1>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);

export default App;