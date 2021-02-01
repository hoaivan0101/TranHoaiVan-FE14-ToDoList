import { combineReducers } from 'redux';
import taskReducer from './Task';

const rootReducer = combineReducers({
    task: taskReducer
})

export default rootReducer;