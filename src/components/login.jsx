import React from 'react'
import {googleLogin} from '../useractions.js';
import {connect} from 'react-redux';

class Login extends React.Component{


	componentWillMount(){
       if(this.props.user !== null){
       	this.props.history.push('/');
       }
	}
	 componentWillReceiveProps(nextProps){
		if(nextProps.user !==null) this.props.history.push('/')
	}
	render(){
		    return(
		    	<div className="log">

                       <div className="form__wrapper text-center mg-tp-10">	
                       <h1 className="heading font-md rele capitalize text-center">
                      log in to get into the website
                       </h1>
                           <button className="btn btn--wave-success mg-tp-5 " onClick={()=>{
                           	this.props.googleLogin();
                           }}>log in with google</button>
                       </div>
                   </div>
		    	)
	}
}
const mapState=(state)=>{
	return{user:state.user}
}
export default connect(mapState,{googleLogin})(Login);