import React from 'react'
import {connect} from 'react-redux';
import {saveComment} from '../action';
class SubmitComment extends React.Component{
state={comment:''}

handleChange=(e)=>{
this.setState({
	[e.target.name]:e.target.value
})
}
handleSumbit=(e)=>{
	e.preventDefault();
	const comment ={
		comment:this.state.comment,
		uid:this.props.uid.uid,
		dispalyName:this.props.uid.displayName
	}
	this.props.saveComment(this.props.id,comment)
this.setState({
	comment:''
})
}
  render(){
      return(<div style ={{marginTop:'10rem'}}>
        <h1 className="heading font-md inco">
         Make A Comment..
         </h1>
        <div className="form">
        	<div className="form__container">
             <form onSubmit={this.handleSumbit}>
             	<textarea required name="comment" onChange={this.handleChange} value={this.state.comment} placeholder="Write a comment.." className="form__textarea"></textarea>
            <button className="btn btn--contained-info mg-none mg-tp">submit</button>
             </form>
        	</div>
        </div>
      </div>)
  }
}
const mapState=(state,ownProps)=>{
	return{uid:state.user }
}
export default connect(mapState,{saveComment})(SubmitComment);