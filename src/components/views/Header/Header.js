




















import styles from './Header.module.css';

import { Link } from 'react-router-dom';
import { logout } from '../../../api/users';
import logo from '../../images/logo5.png';

function Header(props) {

    const { isLoggedIn } = props;

    if (isLoggedIn) {

        return (
            <header className={styles.header}>
                <img className={styles.logo} src={logo} />
                <nav className={styles.nav}>
                    <div className={styles.navLinks}>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/discussions'}>Discussions</Link>
                        <Link to={'/'} onClick={logout}>Logout</Link>
                    </div>
                </nav>
            </ header>
        );

    } else {

        return (
            <header className={styles.header}>
                <img className={styles.logo} src={logo} />
                <nav className={styles.nav}>
                    <div className={styles.navLinks}>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/discussions'}>Discussions</Link>
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/register'}>Register</Link>
                    </div>
                </nav>
            </ header>
        );
    }

}

export default Header;