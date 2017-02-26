webpackJsonp([1,2],{

/***/ 100:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _FilterLink = __webpack_require__(106);

var _FilterLink2 = _interopRequireDefault(_FilterLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
    return _react2.default.createElement(
        'p',
        null,
        'show:',
        ' ',
        _react2.default.createElement(
            _FilterLink2.default,
            { filter: 'SHOW_ALL' },
            'All'
        ),
        ', ',
        _react2.default.createElement(
            _FilterLink2.default,
            { filter: 'SHOW_ACTIVE' },
            'ACTIVE'
        ),
        ', ',
        _react2.default.createElement(
            _FilterLink2.default,
            { filter: 'SHOW_COMPLETED' },
            'COMPLETED'
        )
    );
};

exports.default = Footer;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = function Link(_ref) {
    var active = _ref.active,
        children = _ref.children,
        _onClick = _ref.onClick;

    if (active) {
        return _react2.default.createElement(
            "span",
            null,
            children
        );
    }
    return _react2.default.createElement(
        "a",
        { href: "#",
            onClick: function onClick(e) {
                e.preventDefault();
                _onClick();
            }
        },
        children
    );
};

exports.default = Link;

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Todo = function Todo(_ref) {
    var onClick = _ref.onClick,
        completed = _ref.completed,
        text = _ref.text;
    return _react2.default.createElement(
        'li',
        { onClick: onClick,
            style: {
                textDecoration: completed ? 'line-through' : 'none'
            }
        },
        text
    );
};

exports.default = Todo;

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _Todo = __webpack_require__(103);

var _Todo2 = _interopRequireDefault(_Todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoList = function TodoList(_ref) {
    var todos = _ref.todos,
        onTodoClick = _ref.onTodoClick;
    return _react2.default.createElement(
        'ul',
        null,
        todos.map(function (todo) {
            return _react2.default.createElement(_Todo2.default, _extends({
                key: todo.id
            }, todo, { // 这里有点不明白
                onClick: function onClick() {
                    return onTodoClick(todo.id);
                }
            }));
        })
    );
};

exports.default = TodoList;

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(18);

var _actions = __webpack_require__(28);

var actionCreators = _interopRequireWildcard(_actions);

var _redux = __webpack_require__(19);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddTodo = function AddTodo(props) {
    var input = void 0;
    return _react2.default.createElement(
        'form',
        { onSubmit: function onSubmit(e) {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                props.actions.addTodo(input.value.trim());
                input.value = '';
            } },
        _react2.default.createElement('input', { ref: function ref(node) {
                input = node;
            } }),
        _react2.default.createElement(
            'button',
            { type: 'submit' },
            '\u6DFB\u52A0 todo'
        )
    );
};

function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(actionCreators, dispatch)
    };
}

AddTodo = (0, _reactRedux.connect)(null, mapDispatchToProps)(AddTodo); // 赋予AddTodo组件dispatch的能力，通过props来将dispatch函数传递给AddTodo

exports.default = AddTodo;

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = __webpack_require__(18);

var _actions = __webpack_require__(28);

var _Link = __webpack_require__(102);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProp) {
    return {
        active: ownProp.filter === state.visibilityFilter
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProp) {
    return {
        onClick: function onClick() {
            dispatch((0, _actions.setVisibilityFilter)(ownProp.filter));
        }
    };
};

var FilterLink = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Link2.default);

exports.default = FilterLink;

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = __webpack_require__(18);

var _actions = __webpack_require__(28);

var _TodoList = __webpack_require__(104);

var _TodoList2 = _interopRequireDefault(_TodoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getVisibleTodos = function getVisibleTodos(todos, filter) {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(function (t) {
                return !t.completed;
            });
        case 'SHOW_COMPLETED':
            return todos.filter(function (t) {
                return t.completed;
            });
    }
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        onTodoClick: function onTodoClick(id) {
            dispatch((0, _actions.toggleTodo)(id));
        }
    };
};

var VisibleTodoList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_TodoList2.default);

exports.default = VisibleTodoList;

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(35);

var _reactRedux = __webpack_require__(18);

var _redux = __webpack_require__(19);

var _reducers = __webpack_require__(99);

var _reducers2 = _interopRequireDefault(_reducers);

var _App = __webpack_require__(98);

var _App2 = _interopRequireDefault(_App);

__webpack_require__(100);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default);

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_App2.default, null)
), document.querySelector('#app'));

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addTodo = addTodo;
exports.toggleTodo = toggleTodo;
exports.setVisibilityFilter = setVisibilityFilter;
/**
 * state {String}
 * {
 *      filter: 'SHOW_ALL'|'SHOW_COMPLETED'|'SHOW_ACTIVE',
 *      todos: [
 *          {
 *              id: '1',
 *              text: 'eat, and sleep',
 *              completed: false
 *          },{
 *              id: '2',
 *              text: 'compute programming',
 *              completed: true
 *          }
 *      ]
 * }
 */

// action types
var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';
var TOGGLE_TODO = exports.TOGGLE_TODO = 'TOGGLE_TODO';
var SET_VISIBILITY_FILTER = exports.SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

var VisibilityFilters = exports.VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

// action creators
var nextTodoId = 0;
function addTodo(text) {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text: text
    };
}

function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id: id
    };
}

function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter: filter
    };
}

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _Footer = __webpack_require__(101);

var _Footer2 = _interopRequireDefault(_Footer);

var _AddTodo = __webpack_require__(105);

var _AddTodo2 = _interopRequireDefault(_AddTodo);

var _VisibleTodoList = __webpack_require__(107);

var _VisibleTodoList2 = _interopRequireDefault(_VisibleTodoList);

var _lodash = __webpack_require__(60);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            _lodash2.default.join(['hello', 'redux'], '-')
        ),
        _react2.default.createElement(_AddTodo2.default, null),
        _react2.default.createElement(_VisibleTodoList2.default, null),
        _react2.default.createElement(_Footer2.default, null)
    );
};

exports.default = App;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(19);

var _actions = __webpack_require__(28);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var SHOW_ALL = _actions.VisibilityFilters.SHOW_ALL;


function visibilityFilter() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SHOW_ALL;
    var action = arguments[1];

    switch (action.type) {
        case _actions.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function todos() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.ADD_TODO:
            return [].concat(_toConsumableArray(state), [{
                id: action.id,
                type: _actions.ADD_TODO,
                text: action.text,
                completed: false
            }]);
        case _actions.TOGGLE_TODO:
            return state.map(function (todo) {
                if (action.id === todo.id) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                }
                return todo;
            });
        default:
            return state;
    }
}

var todoApp = (0, _redux.combineReducers)({
    visibilityFilter: visibilityFilter,
    todos: todos
});

exports.default = todoApp;

/***/ })

},[228]);