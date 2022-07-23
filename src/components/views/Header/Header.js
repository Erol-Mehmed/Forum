




















import styles from './Header.module.css';

import { Link } from 'react-router-dom';
import { logout } from '../../../api/users';
import logo from '../../images/logo5.png';
import { useContext } from 'react';
import { UserDataContext } from '../../../App';

function Header() {

    const { user, setUser } = useContext(UserDataContext);

    const handleLogout = () => {
        alert('logout');
        logout();
        Header.forceUpdate();
    }

    console.log(localStorage.getItem('user'));

    console.log(user);

    if (user !== null) {

        return (
            <header className={styles.header}>
                <img className={styles.logo} src={logo} />
                <nav className={styles.nav}>
                    <div className={styles.navLinks}>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/discussions'}>Discussions</Link>
                        <Link to={'/'} onClick={handleLogout}>Logout</Link>
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