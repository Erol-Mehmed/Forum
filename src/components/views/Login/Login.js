




















import Footer from '../Home/FooterHome/FooterHome';
import styles from './Login.module.css';
import { useForm } from 'react-hook-form';
import { login } from '../../../api/users';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserDataContext } from '../../../App';

function Login() {
    const { user, setUser } = useContext(UserDataContext);

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const handleLogin = async (data) => {
        try {
            await login(data.username, data.password);
            setUser(JSON.parse(localStorage.getItem('user')));
            navigate('/');
        } catch (err) {
            alert("Username or password is invalid!");
        }

    };

    return (

        <>
            <h3 className={styles.h3}>Login</h3>

            <div className={styles.body}>
                <div className={styles.formContainer}>
                    <div className={styles.formDiv}>
                        <form className={styles.formTag} onSubmit={handleSubmit(handleLogin)}>
                            <label>Username:
                                <input type="text" name="userName" required placeholder="Username" {...register('username')} />
                            </label>
                            <label>Password:
                                <input type="password" name="password" required placeholder="Password" {...register('password')} />
                            </label>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer footerPar={styles.footerPar} />
        </>

    );

}

export default Login;