import {GET_NOTES,NOTES_STATUS,CURRENT_USER ,GET_USERS} from './actionTYpes.js';
import {database , userDatabase} from './firebase';



// how to get data from firebase 
export  const fetchNotes=()=>{

	return dispatch=> {

	//when the function fire make loading is true
	dispatch({
		type:NOTES_STATUS,
		payload:true
	});

       database.on('value',snapshot=>{
       	dispatch({
             type:GET_NOTES,
             payload:snapshot.val()
       	})
       	// when the notes downloaded make loading false
       	dispatch({
		type:NOTES_STATUS,
		payload:false
	});
       } , ()=>{ dispatch({
       		type:NOTES_STATUS,
       		payload:-1
       	})})
	}
}

// how to push data into a folder in firebase
export const saveNote=(note,uid)=>{
	return  (dispatch)=> {
	 	database.push(note).then((res)=>{
	 	
			 userDatabase.child(uid).child('posts').push(res.key).then((data)=>{
						const newNote={...note , postId:data.key};
						database.child(res.key).update(newNote);
						 })
		}).catch(err=>console.log(err));
			}
}


// delete data or object

export const deleteNote=(id,postId,uid)=>{
	return dispatch=>{
		database.child(id).remove()
		userDatabase.child(uid).child('posts').child(postId).remove();
	}
}


// add comment
export const saveComment=(noteId , comment)=>{   
	return dispatch=>{
		 database.child(noteId).child('comments').push(comment)
	}
}

// update note

export const editNote=(id,note)=>{


		return dispatch=>{
		database.child(id).update(note);

}
}

//get the user liked posts 

export const currentUser=(uid)=>{
	return dispatch=>{
		userDatabase.child(uid).on('value',(snapshot)=>{
			dispatch({
				type:CURRENT_USER,
				payload:snapshot.val()
			})
		})
	}
}

// get all user 
export const allUsers=()=>{
	return dispatch=>{
		userDatabase.on('value',(snapshot)=>{
			dispatch({
				type:GET_USERS,
				payload:snapshot.val()
			})
		})
	}
}

//add liked notes in the uid of the users;
export const like=(note,user,type)=>{
	return dispatch=>{
		userDatabase.child(user.uid).child(type).child(note).push(note);
		database.child(note).child(type).child(user.uid).push(user)
	}
}

 export const unLike=(note,uid,type)=>{
 	return dispatch=>{
		userDatabase.child(uid).child(type).child(note).remove();
		database.child(note).child(type).child(uid).remove();
	 	}
 }

 // get the Currentuser 




