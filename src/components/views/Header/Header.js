




















import './Header.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWizardsOfTheCoast } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import { logout } from '../../../api/users';

function Header(props) {

    const { isLoggedIn } = props;
    console.log(isLoggedIn);

    if (isLoggedIn) {

        return (
            <header>
                <nav>
                    <FontAwesomeIcon icon={faWizardsOfTheCoast} id="logo" />
                    <div id='navLinks'>
                        <Link to={'/'}>Home</Link>
                        <Link to={''}>Discussions</Link>
                        <Link to={'/'} onClick={logout}>Logout</Link>
                    </div>
                </nav>
            </ header>
        );

    } else {

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

}

export default Header;