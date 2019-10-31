import {auth ,googleProvider} from './firebase';
import {GET_USER,USER_STATUS} from './actionTYpes'

// log in with google
export const googleLogin=()=>{
	return dispatch=>{
	 auth.signInWithPopup(googleProvider)
	};
}

// sign out 
export const logOut=()=>{
	return dispatch=>{
		auth.signOut()
	}
}

// get user info
export  const getUser=()=>{
	return dispatch=>{
		//show loading status before user get to login
	 dispatch({
		type:USER_STATUS,
		payload:true
	})
		auth.onAuthStateChanged(user=>{
			dispatch({
				type:GET_USER,
				payload:user
			});
			//show loading status before user get to login
	 dispatch({
		type:USER_STATUS,
		payload:false
	});
		})
	}
}