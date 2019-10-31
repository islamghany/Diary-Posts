import {combineReducers} from 'redux';
import notesREducer from './notesReducer';
import userReducer from './userReducer';
import loadingReducer from './loadingReducer';
const rootReducer =combineReducers({
	notes:notesREducer,
	user:userReducer,
	loading:loadingReducer
})
export default rootReducer;