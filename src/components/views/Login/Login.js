




















import Footer from '../Home/FooterHome/FooterHome';
import styles from './Login.module.css';
import { useForm } from 'react-hook-form';

function Login() {
    const {register, handleSubmit} = useForm();
    const handleLogin = (data) => console.log(data);

    return (

        <>
            <h3 className={styles.h3}>Login</h3>

            <div className={styles.body}>
                <div className={styles.formContainer}>
                    <div className={styles.formDiv}>
                        <form className={styles.formTag} onSubmit={handleSubmit(handleLogin)}>
                            <label>Username:
                                <input type="text" name="userName" required placeholder="Username" {...register('Username')}/>
                            </label>
                            <label>Password:
                                <input type="password" name="password" required placeholder="Password" {...register('Password')}/>
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