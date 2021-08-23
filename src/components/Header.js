import {BrowserRouter as Router,Link } from "react-router-dom";

const Header = () => {
    let today = Date();
    today = today.substring(0,16);
    return(
        <header className='header'>
            <div className='localization'>
                <div className='todaysDate'>
                    <p>{today}</p>
                </div>
                <div className='preferredLanguage'>
                    <Router>
                    <ul>
                        <li>
                            <Link to="/">English</Link>
                        </li>
                        <li>
                            <Link to="/ar">Arabic</Link>
                        </li>
                    </ul>
                    </Router>                
                </div>
                <div className='officeHours'>
                    <p>Mon-Thurs 6PM-3PM PST</p>
                </div>
            </div>
        </header>
    )
}

export default Header;