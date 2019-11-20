import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {allUsers} from '../action';
import loadingComponent from './loadingComponent';
import _ from 'lodash'
class  searchComponent extends React.Component{


componentDidMount(){
	this.props.allUsers();
}
 renderUser=(user)=>{
 	const id =this.props.match.params.id.toLowerCase();
 	const {info } = user;
        if(info.displayName.toLowerCase().indexOf(id) >= 0 ||  (info.nickname && info.nickname.toLowerCase().indexOf(id)>=0) ){
        	return( 	<div className="profile__header mg-tp">
            <div className="profile__header-img mg-reight" >
               <img src={info.photoURL} alt=""/>
            </div>
            <div className="profile__header-info">
             <Link to={`/profile/${info.uid}`} ><div className="heading font-md ald cent">{info.displayName} {info.nickname && ( <span className="secondary">({info.nickname})</span>)}</div></Link>
             {info.country && (<p className="heading font-ty lato">From: {user.info.country}</p>)}
            </div>
			</div>
			)
        }
      
 	}
 renderMap=()=>{
 	return _.map(this.props.users ,(user,key)=>{
  	 		return  (<div key={key}>{ this.renderUser(user)}</div>)
  	 	})
 }
  render(){
  	if(this.props.users){
       return(
         <div className="form__wrapper mg-tp-10">
         	{this.renderMap()}
         </div>
        
       	)
  	 	

  }
  else {
  	return(
  		<loadingComponent />)
  }
}
}
const mapState=(state)=>{
	return{ users:state.allUsers}
} 
export default connect(mapState,{allUsers})(searchComponent);