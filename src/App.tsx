import React, { useState } from 'react'
import './App.css'
import NavBar from './component/Navbar/index';
import Problem from './component/Problem/index';
import Footer from './component/Footer/index';
import { Route, Switch } from 'react-router-dom';
import Hello from './component/Hello/index';

function App() {

	return (
		<div>
			<NavBar />
			<Switch>
				<Route path="/problem/:chapter/:article" component={Problem} />
				<Route path="/" component={Hello} />
			</Switch>
			<Footer />
		</div>
	)
}

export default App
