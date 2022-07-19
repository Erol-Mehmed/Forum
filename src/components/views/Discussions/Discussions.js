




















import styles from './Discussions.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/free-brands-svg-icons";

function Discussions() {

    return (

        <div className={styles.body}>

            <div className={styles.communities}>
                <div className={styles.header}>
                    <h3>Community</h3>
                </div>
                <div className={styles.commSections}>
                    <div className={styles.generalDisc}>
                    <FontAwesomeIcon icon="fa-regular fa-comment" />
                    </div>
                    <div className={styles.userReviews}></div>
                </div>
            </div>

        </div>

    );

}

export default Discussions;