




















import styles from './MainHome.module.css';
import firstImage from '../../../images/firstImage3.jpg';
import secondImage from '../../../images/homeBB.jpg';

function Welcome(props) {

    return (
        <div className={styles.welcCompDiv}>
            <h3>{props.name} welcome to <br /> GameInsiders</h3>
            <h4>You have:</h4>
            <p>{props.topics} topics</p>
            <p>{props.posts} posts</p>
        </div>
    );

}


function Main() {

    return (

        <main className={styles.main}>
            <img className={styles.image} src={firstImage} />
            <img className={styles.image} src={secondImage} />
            <div className={styles.welcomeDiv}>
                <Welcome name="Anonymous" topics="0" posts="0" />
            </div>
        </main>

    );

}

export default Main;