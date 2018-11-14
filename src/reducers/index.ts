import { combineReducers } from 'redux';
import numberInputReducer from './numberInputReducer';
import promptReducer from './promptReducer';
import customTextInputReducer from './customTextInputReducer';
import modalReducer from './modalReducer';


export default combineReducers({
    numberInputReducer,
    promptReducer,
    customTextInputReducer,
    modalReducer
});