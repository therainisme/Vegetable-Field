import React, { useState } from 'react'
import './App.css'
import NavBar from './component/Navbar/index';
import Article from './component/Article/index';
import Footer from './component/Footer/index';
import { Route, Switch } from 'react-router-dom';

function App() {

	return (
		<div>
			<NavBar />
			<Switch>
				<Route path="/problem/:chapter/:article" component={Article} />
			</Switch>
			<Footer />
		</div>
	)
}

export default App
