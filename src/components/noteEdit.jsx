
	import React from 'react'
	import {connect} from 'react-redux';
	import {editNote} from '../action';
import Back from './back';
	class noteDatails extends React.Component{
		constructor(props){
          super(props);
        this.state={text:'',body:''}
         

		}
		  
    componentWillMount(){
    	 this.setState({
    		text:this.props.note.text,
    		body:this.props.note.body
    	})
    }
    handleChang=(e)=>{
      this.setState({
      	[e.target.name]:e.target.value
      })
    }
handleSubmit=(e)=>{
e.preventDefault();

const note ={
	...this.state,
	uid:this.props.uid
}
this.props.editNote(this.props.match.params.id,note)
this.setState({
	text:'',body:'',uid:this.props.uid
})
this.props.history.push('/');
}
		render(){
			return(
	             <div className="form__wrapper mg-tp">
	             <Back />
	              <div className="form">
		  	<div className="form__container">
		  	<form  onSubmit={this.handleSubmit}>
              <input type="text" name="text" className="form__input"  value={this.state.text} onChange={this.handleChang}  placeholder="text.." />
              <textarea name="body" placeholder="body.."  value={this.state.body}  onChange={this.handleChang} className="form__textarea"></textarea>
               <button className="btn btn--contained-info circle block mg-none mg-tp">Save</button>
              </form>
		  	</div>
		  </div>
	             </div>
				)
		}
	} 
	const mapState=(state,ownProps)=>{
		return {
			   note:state.notes[ownProps.match.params.id],
	           uid:state.user.uid
		}
	}
	export default connect(mapState,{editNote})(noteDatails)