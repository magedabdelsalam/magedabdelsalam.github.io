// Packages
import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// Pages
import Home from './pages/Home'
import Work from './pages/Work'
import Page from './pages/Page'
// Components
import Header from './components/Header'
import Footer from './components/Footer'
// Styles
import './App.css';
import pages from "./data/pages";

const App = () => {
	const location = useLocation();
  	return (
		<div className='app'>
			<Header />
				<AnimatePresence exitBeforeEnter>
						<Switch location={location} key={location.pathname}>
							<Route exact path="/" component={Home} />
							{pages.map((page) => (
								<Route exact path={page.path}>
									<Page content={page.content}/>
								</Route>
							))}
							<Route exact path="/work" component={Work}/>
						</Switch>
				</AnimatePresence>
			<Footer /> 
		</div>
	);
}

export default App;