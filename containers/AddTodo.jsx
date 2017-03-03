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
                import('moment')    // 动态import，实现按需（异步）加载
                    .then(moment => {
                        console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
                    })
                    .catch(err => {
                        console.log(`moment加载失败:${err}`);
                    });
                return;
            }
            require.ensure(['../testModules/a', '../testModules/b'], require => {   // 另外一种按需加载
                require('../testModules/b');
                require('../testModules/c');
                console.log('done!')
            }, 'test'); // 这里指定名称对应为output.chunkFilename的[name]占位符
            props.actions.addTodo(input.value.trim());
            input.value = '';
        }}>
            <input ref={node => {
                input = node
            }}/>
            <button type="submit">
                add todo
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