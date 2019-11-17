import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';
import Login from './components/login';
import Header from './components/header';
import Auth from './components//auth';
import './style/style.scss';

import {createStore , applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import  {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducer/index.js';
import thunk from 'redux-thunk';
import {BrowserRouter  as Router, Route,Switch} from 'react-router-dom'
import Loading from './components/loading';
import noteDetails from './components/noteDetails';
import searchComponent from './components/searchComponent';

import NoteEdit from './components/noteEdit';
import Profile from './components/user/profile';
import SettingDashborad from './components/settings/settingDashborad';
import ReduxToastr from 'react-redux-toastr'

const store =createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));




ReactDom.render(
	<Provider store={store}>
	<Router>
	<Loading >
	  <div>
	  <Switch>
	  		<Route path='/login' component={Login} />
	  		<div className="mg-tp-5">
	  		<Auth>
	  		<Header />	  		
	  		 		 <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="bottom-right"
      getState={(state) => state.toastr} // This is the default
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar


      closeOnToastrClick/>
	  		<Route path='/' exact component={App} />
            <Route path='/profile/:id' exact component={Profile} />
            <Route path='/settings'   component={SettingDashborad} />
	  		<Route path='/:id/edit' exact component={NoteEdit} />
	  		<Route path='/post/:id' exact component={noteDetails} />	 
	  		<Route path='/search/:id' exact component={searchComponent} />	  		  	    		  	   
	  		</Auth>
	  		 </div>
	  		 </Switch>
	  </div>
	  </Loading>
	</Router>
</Provider>
	, document.querySelector('#root')

	)    