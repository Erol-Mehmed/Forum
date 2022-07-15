




















import './Header.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWizardsOfTheCoast } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import Login from '../Login/Login';

function Header() {

    return (
        <header>
            <nav>
                <FontAwesomeIcon icon={faWizardsOfTheCoast} id="logo" />
                <div id='navLinks'>
                    <Link to={'/'}>Home</Link>
                    <Link to={''}>Discussions</Link>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/register'}>Register</Link>
                </div>
            </nav>
        </ header>
    );

}

export default Header;