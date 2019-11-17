import React from 'react';
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {getUser,logOut} from '../useractions';
import { Menu, Dropdown, Image } from 'semantic-ui-react';

class  Header extends React.Component{
state={
	keyword:''
}


handleChange=(e)=>{
   this.setState({keyword:e.target.value})

}
handleSubmit=(e)=>{
	e.preventDefault();
	console.log(this.state);
	this.props.history.push(`/search/${this.state.keyword}`)
	}
	render(){
	 return(
		<nav >
		<div className="nav__logo">
		<Link to='/'>
         <svg id="Layer_1" enableBackground="new 0 0 512 512"  viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><path d="m50.661 140.579c0-2.259 1.839-4.097 4.1-4.097h364.41v-43.372c0-2.804-2.295-5.097-5.1-5.097h-408.971c-2.805 0-5.1 2.293-5.1 5.097v223.466c0 2.805 2.295 5.098 5.1 5.098h45.561z" fill="#ffdd57"></path><path d="m32.451 316.576v-223.466c0-2.804 2.295-5.097 5.1-5.097h-32.451c-2.805 0-5.1 2.293-5.1 5.097v223.466c0 2.805 2.295 5.098 5.1 5.098h32.451c-2.805-.001-5.1-2.293-5.1-5.098z" fill="#ffdd57"></path><path d="m453.107 363.419v-227.937h-398.346c-2.805 0-5.1 2.294-5.1 5.097v223.466c0 2.805 2.295 5.098 5.1 5.098h50.528l25.628 35.535c1.642 2.276 4.326 2.276 5.966 0l25.628-35.535h291.521c-.555-1.985-.925-4.135-.925-5.724z" fill="#209cee"></path><path d="m81.899 364.045v-223.466c0-2.803 2.295-5.097 5.1-5.097h-32.238c-2.805 0-5.1 2.294-5.1 5.097v223.466c0 2.805 2.295 5.098 5.1 5.098h32.239c-2.805-.001-5.101-2.294-5.101-5.098z" fill="#209cee"></path><g fill="#f9f9f9"><path d="m413.379 197.826h-319.367c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h319.367c4.142 0 7.5 3.357 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5z"></path><path d="m413.379 239.49h-319.367c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h319.367c4.142 0 7.5 3.357 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5z"></path><path d="m413.379 281.15h-67.754c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h67.754c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z"></path><path d="m308.539 281.15h-214.527c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h214.526c4.142 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.499 7.5z"></path><path d="m263.248 322.811h-169.236c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h169.235c4.142 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.499 7.5z"></path></g><path d="m512 153.554v-32.702c0-5.696-4.659-10.356-10.354-10.356h-39.185c-5.695 0-10.355 4.66-10.355 10.356v32.702z" fill="#fd646f"></path><path d="m484.908 110.496h-22.447c-5.695 0-10.355 4.66-10.355 10.356v31.702h22.447v-31.702c.001-5.696 4.66-10.356 10.355-10.356z" fill="#fc4755"></path><path d="m452.107 362.419v1c0 2.848 1.068 7.249 2.373 9.781l25.201 48.888c1.305 2.532 3.44 2.532 4.745 0l25.201-48.888c1.305-2.532 2.373-6.934 2.373-9.781v-1z" fill="#fdd1a3"></path><path d="m476.927 373.2c-1.305-2.532-2.373-6.934-2.373-9.781v-1h-22.447v1c0 2.848 1.068 7.249 2.373 9.781l25.201 48.888c1.305 2.532 3.44 2.532 4.745 0l8.851-17.17z" fill="#ffbb85"></path><path d="m484.426 422.088 17.222-33.41h-39.189l17.222 33.41c1.305 2.532 3.44 2.532 4.745 0z" fill="#3d5959"></path><path d="m452.107 152.554h59.893v210.864h-59.893z" fill="#fee567"></path><path d="m474.554 152.554h15v210.864h-15z" fill="#fda613"></path></svg>
		</Link>
		</div>
	
          <div className="search__body">
          <div className="icon">
             <svg fill="#231F20"  version="1.1" width="15px" height="15px"  id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 52.966 52.966" style={{enableBackground:"new 0 0 52.966 52.966"}} xmlSpace="preserve">
<path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
  c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
  C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
  S32.459,40,21.983,40z"/>
<g>
</g>
</svg>
          </div>
          <form onSubmit={this.handleSubmit}>
           <input type="text" name="keyword" autoComplete="off"
            required value={this.props.keyword} placeholder="Search.."
             onChange={this.handleChange} className="form__input mg-none" />
          </form>	          
		</div>
		
    <Menu.Item className="drop" >
      <Image avatar spaced="right" src={this.props.user.photoURL || "/assets/user.png"} />
      <Dropdown pointing="top left" text={this.props.user.displayName} >
        <Dropdown.Menu className="zidx" style={{zIndex :'100000000'}}>
          <Dropdown.Item as={Link} to={`/profile/${this.props.user.uid}`} text="My Profile" icon="user" />
          <Dropdown.Item  as={Link} to={`/settings`}  text="Settings" icon="settings" />
           <Dropdown.Divider />
          <Dropdown.Item onClick={
          	()=>{ this.props.logOut()}
          } text="Sign Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
   
</nav>
		
	)
	}
}

const mapState=(state)=>{
	return {user:state.user}
}

export default   withRouter(connect(mapState,{getUser,logOut})(Header));