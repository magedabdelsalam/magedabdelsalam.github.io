// React
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import Header from './components/Header'
import Footer from './components/Footer'
// Pages
import Home from './pages/Home'
import DesignedChaos from './pages/DesignedChaos'
import ThreeVessels from './pages/ThreeVessels'
import January25th from './pages/January25th'
import Boomspace from './pages/Boomspace'
// Styles
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Router>
					<Switch>
						<Route exact path="/" component={Home} />
            <Route exact path="/designed-chaos" component={DesignedChaos} />
            <Route exact path="/three-vessels" component={ThreeVessels} />
            <Route exact path="/january-25th" component={January25th} />
            <Route exact path="/boomspace-workshop" component={Boomspace} />
					</Switch>
				</Router>
      <Footer/>
    </div>
  );
}

export default App;
