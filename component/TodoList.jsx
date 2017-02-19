import React from 'react';
import Todo from './Todo.jsx';

const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {todos.map(todo => (
            <Todo
                key={todo.id}
                {...todo}   // 这里有点不明白
                onClick={() => onTodoClick(todo.id)}
            />
        ))}
    </ul>
);

export default TodoList;

