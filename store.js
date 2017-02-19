import {createStore} from 'redux';
import todoApp from './reducers';
import {VisibilityFilters} from './actions';

let store = createStore(todoApp);

export default store;

