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
import NoteEdit from './components/noteEdit'
const store =createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));




ReactDom.render(
	<Provider store={store}>
	<Router>
	<Loading >
	  <div>
	  	<Switch>
	  		<Route path='/login' component={Login} />
	  		<Auth>
	  		<Header />
	  		<Route path='/' exact component={App} />
	  		<Route path='/:id/edit' exact component={NoteEdit} />
	  		<Route path='/:id' exact component={noteDetails} />

	  		</Auth>
	  	</Switch>
	  </div>
	  </Loading>
	</Router>
</Provider>
	, document.querySelector('#root')

	)    