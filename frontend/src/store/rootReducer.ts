import { combineReducers } from 'redux';
import unauthenticatedReducer from './unauthenticated/unauthenticatedReducer';

const rootReducer = combineReducers({
    unauthenticated : unauthenticatedReducer
});

export default rootReducer;