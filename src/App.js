// React
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// Components
import Header from './components/Header'
import Footer from './components/Footer'
// Pages
import Home from './pages/Home'
// Styles
import './App.css';

function App() {
  return (
    <div className='app'>
		<Header/>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</Router>
		<Footer/>
    </div>
  );
}

export default App;
