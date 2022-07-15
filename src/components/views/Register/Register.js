





















import { useForm } from 'react-hook-form';
import styles from './Register.module.css';
import Footer from '../Home/FooterHome/FooterHome';
import { useNavigate } from 'react-router-dom';
import { registerToServer } from '../../../api/users';

function Register() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const handleRegistration = async (data) => { 

        try {
            if (data.password !== data.passwordConfirm) {
                throw new Error('Passwords does not match!');
            } else {
                await registerToServer(data.username, data.email, data.password);
            }
            
            navigate('/');
        } catch (err) {
            alert(err.message);
        }

        
        console.log(data);
    
    };

    return (

        <>
            <h3 className={styles.h3}>Register</h3>

            <div className={styles.body}>
                <div className={styles.formContainer}>
                    <div className={styles.formDiv}>
                        <form className={styles.formTag} onSubmit={handleSubmit(handleRegistration)}>
                            <label>Username:
                                <input type="text" name="userName" required placeholder="Username" {...register('userName')} />
                            </label>
                            <label>Email:
                                <input type="email" name="email" required placeholder="Email" {...register('email')} />
                            </label>
                            <label>Password:
                                <input type="password" name="password" required placeholder="Password" {...register('password')} />
                            </label>
                            <label>Confirm password:
                                <input type="password" name="passwordConfirm" required placeholder="Confirm password" {...register('passwordConfirm')} />
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

export default Register;