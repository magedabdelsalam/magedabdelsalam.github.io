// Packages
import React from "react";
import { Switch, Route, Redirect, useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
// Pages
import Work from './pages/Work'
import Design from "./pages/Design";
import Page from './pages/Page'
import Error from './pages/Error' 
// Styles
import './App.css';
// Data
import pages from "./data/pages";

const App = () => {
	const container = {
        hide: { 
            opacity: 0,
            x: "60px",
            transition:{
                duration: 0.3,
            }
        },
        show: { 
            opacity: 1,
            x: "0px",
            transition:{
				duration: 0.3,
				staggerChildren: 0.1
            }
        },
		exit: { 
            opacity: 0,
            x: "-60px",
            transition:{
                duration: 0.3,
            }
        },
    }
	const location = useLocation();
  	return (
		<AnimatePresence exitBeforeEnter>
			<Switch location={location} key={location.pathname}>
				<Route exact path="/">
					<Redirect to="/work" />
				</Route>
				<Route exact path="/work">
					<Work container={container}/>
				</Route>
				<Route exact path="/design">
					<Design container={container}/>
				</Route>
				{pages.map((page,index) => (
					<Route path={page.path} key={index}>
						<Page content={page.content} container={container}/>
					</Route>
				))}
				<Route path='*'>
					<Error container={container}/>
				</Route>
			</Switch>
		</AnimatePresence>
	);
}

export default App;