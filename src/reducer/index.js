import {combineReducers} from 'redux';
import notesREducer from './notesReducer';
import userReducer from './userReducer';
import loadingReducer from './loadingReducer';
import likedReducer from './likedReducer';
import {reducer as toastrReducer} from 'react-redux-toastr'
import usersReducer from './usersReducer'
const rootReducer =combineReducers({
	notes:notesREducer,
	user:userReducer,
	loading:loadingReducer,
	currentUser:likedReducer,
	 toastr: toastrReducer,
	 allUsers : usersReducer
})
export default rootReducer;