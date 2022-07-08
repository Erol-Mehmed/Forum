




















import './Header.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWizardsOfTheCoast } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

function Header() {

    return (
        <header>
            <nav>
            <FontAwesomeIcon icon={faWizardsOfTheCoast} id="logo"/>
            <div id='navLinks'>
                <Link to={''}>Home</Link>
                <Link to={''}>Discussions</Link>
                <Link to={''}>Sign Up</Link>
                <Link to={''}>Login</Link>
            </div>
            </nav>
        </ header>
    );

}

export default Header;