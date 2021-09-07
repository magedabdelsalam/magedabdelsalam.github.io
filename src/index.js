// Packages
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
// Components
import Header from './components/Header'
import App from './App';
import Footer from './components/Footer'

ReactDOM.render(
    <Router>
        <Header />
            <App />
        <Footer /> 
    </Router>,document.getElementById('root')
);