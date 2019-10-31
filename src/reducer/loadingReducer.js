import {USER_STATUS , NOTES_STATUS} from '../actionTYpes';

export default(state={},action)=>{
	switch (action.type) {
		case USER_STATUS:
			return {...state , user:action.payload}	
			case NOTES_STATUS:
			return {...state , notes:action.payload}	
		default:
			return state;
	}
}