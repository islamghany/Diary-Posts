import React from 'react';
import {connect} from 'react-redux';
import {fetchNotes,saveNote,deleteNote} from '../action.js';
import {getUser} from '../useractions';
import {Link} from 'react-router-dom';

import _ from 'lodash'
class App  extends React.Component{
	state={
		text:'',
		body:'',
		uid:'',
	   photoURL:'',
	   displayName:''
	}
	// componentDidMount(){
 //          this.props.fetchNotes();
 //          this.props.getUser();
	// }
    handleChang=(e)=>{
      this.setState({
      	[e.target.name]:e.target.value
      })
    }
handleSubmit=(e)=>{
e.preventDefault();

const note ={
	...this.state,
	uid:this.props.user.uid,
	photoURL:this.props.user.photoURL,
	displayName:this.props.user.displayName
}
this.props.saveNote(note)
this.setState({
	text:'',body:'',uid:this.props.user.uid
})

}

renderNotes(){

		return _.map(this.props.notes ,(note,key)=>{
			return(
                        <div className="message white post" key={key}>
                       <div className="message__header">
                      <div className="user">
                        <div className="user__info">
                              <img className="user__image"  alt ='user' src={note.photoURL}/>
                              <h1 className="heading font-sm capitalize mont">{note.displayName}</h1>
                        </div>
                     </div> 
                  {note.uid === this.props.user.uid && (          <button className="btn btn--circled-menu  dropdown" onClick={()=>{
                         	document.querySelector(`#${key}`).classList.toggle('visible');
                         }}>
      <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
    <div className="dropdown-menu" id={key}>
       <span onClick={()=>{
                          this.props.deleteNote(key);
              }}>Delete</span>
       <Link to={`/${key}/edit`}>Updtat</Link>
     </div> 
    </button>)}
                        </div>
                      <Link to={`/${key}`}>    <div className="message__content">
                             <h1 className="heading font-lg rele capitalize">{note.text}</h1>

                        <p className="heading font-sm alt">{note.body}</p>
                       
                        </div>   
                        </Link>                   
                        </div>
				)
		})
	
}
	render(){
		return(
			<div>
		 <div className="form__wrapper">
		  <div className="form">
		  	<div className="form__container">
		  	<form  onSubmit={this.handleSubmit}>
              <input type="text" name="text" className="form__input" maxLength="25"  required value={this.state.text} onChange={this.handleChang}  placeholder="Title.." />
              <textarea name="body" placeholder="Post.."  maxLength="255" value={this.state.body} required onChange={this.handleChang} className="form__textarea"></textarea>
               <button className="btn btn--contained-info circle block mg-none mg-tp">Save</button>
              </form>
		  	</div>
		  </div>
		</div>
		<div className="notes form__wrapper">
           {this.props.notes && this.renderNotes()}
		</div>
		</div>
		)
	}
}
const mapState=(state)=>{
  return{notes:state.notes,user:state.user}
}
export default connect(mapState,{fetchNotes,saveNote,deleteNote,getUser})(App);