import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {getUser,logOut} from '../useractions';

class  Header extends React.Component{

	render(){
	 return(
		<nav >
			<Link className="btn btn--contained-dark mg-none" to='/'>Home</Link>
		{ this.props.user == null ?	( <Link className="btn btn--contained-default mg-none" to='/login'>Login</Link>) : (<button 
			onClick={()=>this.props.logOut()} className="btn btn--contained-default mg-none">logout</button>)}
		</nav>
		
	)
	}
}

const mapState=(state)=>{
	return {user:state.user}
}

export default connect(mapState,{getUser,logOut})(Header);