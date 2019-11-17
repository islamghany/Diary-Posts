import React from 'react';
import _ from 'lodash';
import {Link } from 'react-router-dom';
class UserModel extends React.Component{


	renderUsers(){
			
           if(this.props.likedPosts){
          return _.map(this.props.likedPosts,(id,key)=>{
          const user = id[Object.keys(id)[0] ];
            return (
               <Link to={`/profile/${user.uid}`}  key={key}>
                           <div className="user" >
                           
                             <div className="user__icon">
                               <img src= {user.photoURL} alt="user"/> 
                             </div>
                             <div className="user__name">
                              {user.displayName}
                             </div>
                           
                           </div>
                             </Link>
            	)
          })
      }
	 }
	render(){
		return(
             <div className="model__wrapper" id="model">
               <div className="model__body">
               <div className="model__close" onClick={()=>{document.querySelector('#model').classList.remove('scale')}}>
               <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 47.971 47.971" width="20px" height="20px" style={{enableBackground:"new 0 0 47.971 47.971"}} xmlSpace="preserve">
<g>
	<path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
		c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
		C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
		s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
</g>
</svg>
</div>
                 <div className="model__header">
                  people who { this.props.type && <span> {this.props.type}</span> } this post
                  </div>
                 	<div className="model__content">
                 	{this.renderUsers()}
                 	</div>
               </div>   
             </div>
			)
	}
}


export default UserModel;