import React from 'react'
import {connect} from 'react-redux';
import SubmitComment from './submitComment';
import _ from 'lodash';
import Back from './back';

class noteDatails extends React.Component{
  renderComments(){
  	const {note} =this.props;
  	return _.map(note.comments ,(comm,key)=>{
			return(
                        <div className="message default" key={key} >
                        <div className="message__header">
                       {comm.dispalyName}
                        </div>
                        <div className="message__content"><div>{comm.comment}</div>
                 
                        </div>                      
                        </div>
				)
		})
  }
	render(){
		const {note} = this.props;
		return(
             <div className="form__wrapper mg-tp">
              <Back />
               <h1 className="heading font-hg upper">{note.text}</h1>
               <p className="heading font-md">{note.body}</p>
                <SubmitComment id={this.props.match.params.id} />
                <div>
                 {this.renderComments()}
                </div>
             </div>
			)
	}
} 
const mapState=(state,ownProps)=>{
	return {note:state.notes[ownProps.match.params.id]}
}
export default connect(mapState)(noteDatails)