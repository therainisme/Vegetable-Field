import React, { useState } from 'react'
import './App.css'
import NavBar from './component/Navbar/index';
import Article from './component/Article/index';
import Footer from './component/Footer/index';

function App() {

	return (
		<div>
			<NavBar />
			<Article />
			<Footer />
		</div>
	)
}

export default App
