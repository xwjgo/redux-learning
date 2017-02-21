import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

let AddTodo = ({dispatch}) => {
    let input;
    return (
        <form onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
                return;
            }
            dispatch(addTodo(input.value));
            input.value = '';
        }}>
            <input ref={node => {
                input = node
            }}/>
            <button type="submit">
                Add Todo
            </button>
        </form>
    );
};

AddTodo = connect()(AddTodo);   // 赋予AddTodo组件dispatch的能力，通过props来将dispatch函数传递给AddTodo

export default AddTodo;