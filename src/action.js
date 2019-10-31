import {GET_NOTES,NOTES_STATUS} from './actionTYpes.js';
import {database} from './firebase';




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
       	})} )
	}
}

// how to push data into a folder in firebase
export const saveNote=(note)=>{
	return dispatch=>{
		database.push(note)
	}
}


// delete data or object

export const deleteNote=(id)=>{
	return dispatch=>{
		database.child(id).remove();
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
		database.child(id).update(note)
	}
}