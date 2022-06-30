




















import './Header.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWizardsOfTheCoast } from "@fortawesome/free-brands-svg-icons";

function Header() {

    return (
        <header>
            <nav>
            <FontAwesomeIcon icon={faWizardsOfTheCoast} id="logo"/>
            <div id='navLinks'>
                <a href="">Home</a>
                <a href="">Forum</a>
                <a href="">Sign Up</a>
                <a href="">Login</a>
            </div>
            </nav>
        </ header>
    );

}

export default Header;