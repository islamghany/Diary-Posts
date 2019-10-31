import {GET_NOTES} from '../actionTYpes.js';

export default(state={},action)=>{
	switch (action.type) {
		case GET_NOTES:
		   return action.payload
		
		default:
		return state;
			
	}
} 