





















import { useForm } from 'react-hook-form';
import styles from './Register.module.css';
import Footer from '../Home/FooterHome/FooterHome';

function Register() {
    const { register, handleSubmit } = useForm();
    const handleRegistration = (data) => console.log(data);

return (

    <>
        <h3 className={styles.h3}>Register</h3>

    <div className={styles.body}>
        <div className={styles.formContainer}>
            <div className={styles.formDiv}>
        <form className={styles.formTag} onSubmit={handleSubmit(handleRegistration)}>
        <label>Username:
            <input type="text" name="userName" placeholder="Username" {...register('userName')} />
        </label>
        <label>Email:
            <input type="email" name="email" placeholder="Email" {...register('email')} />
        </label>
        <label>Password:
            <input type="password" name="password" placeholder="Password" {...register('password')} />
        </label>
        <label>Confirm password:
            <input type="password" name="passwordConfirm" placeholder="Confirm password" {...register('passwordConfirm')} />
        </label>
        <button>Submit</button>
        </form>
        </div>
      </div>
    </div>
    <Footer footerPar={styles.footerPar}/>
    </>
);

}

export default Register;