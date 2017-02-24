import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions';
import {bindActionCreators} from 'redux';

let AddTodo = (props) => {
    let input;
    return (
        <form onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
                return;
            }
            props.actions.addTodo(input.value.trim());
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

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    }
}

AddTodo = connect(null, mapDispatchToProps)(AddTodo);   // 赋予AddTodo组件dispatch的能力，通过props来将dispatch函数传递给AddTodo

export default AddTodo;