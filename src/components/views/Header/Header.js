




















import styles from './Header.module.css';

import { Link } from 'react-router-dom';
import { logout } from '../../../api/users';
import logo from '../../images/logo5.png';
import { useContext, useEffect } from 'react';
import { UserDataContext } from '../../../App';

function Header({ username }) {
    const { user, setUser } = useContext(UserDataContext);
    
    const HandleLogout = () => {

        useEffect(() => {
            localStorage.removeItem('user');
            logout();
        })
    }

    console.log(username);

    if (username) {

        return (
            <header className={styles.header}>
                <img className={styles.logo} src={logo} />
                <nav className={styles.nav}>
                    <div className={styles.navLinks}>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/discussions'}>Discussions</Link>
                        <Link to={'/'} onClick={HandleLogout}>Logout</Link>
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