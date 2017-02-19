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
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

// action creators
let nextTodoId = 0;
export function addTodo (text) {
    return {
        type: ADD_TODO,
        id: nextTodoId ++,
        text
    }
}

export function toggleTodo (id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export function setVisibilityFilter (filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}