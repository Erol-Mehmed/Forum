




















import styles from './Discussions.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

function Discussions() {

    return (

        <div className={styles.body}>

            <div className={styles.communities}>
                <div className={styles.header}>
                    <h3>Community</h3>
                </div>
                <div className={styles.commSections}>
                    <div className={styles.generalDisc}>
                        <FontAwesomeIcon icon={faComments} className={styles.icon} />
                        <div className={styles.column}>
                            <p className={styles.heading}>General Discussions</p>
                            <p className={styles.description}>This is the place to discuss it all. From an impending Nuclear War to equally important things like your favorite celebrity's toothbrush brand.</p>
                        </div>
                        <div className={styles.statistics}>
                            <div className={styles.threads}>
                                <p>Threads</p>
                                <p className={styles.countP}>0</p>
                            </div>
                            <div className={styles.messages}>
                                <p>Messages</p>
                                <p className={styles.countP}>0</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.originalWorks}>
                        <FontAwesomeIcon icon={faComments} className={styles.icon} />
                        <div className={styles.column}>
                            <p className={styles.heading}>Original Works</p>
                            <p className={styles.description}>This is the place to share the fruits of your creative bursts. Certain homemade videos does not count as creative work!</p>
                        </div>
                        <div className={styles.statistics}>
                            <div className={styles.threads}>
                                <p>Threads</p>
                                <p className={styles.countP}>0</p>
                            </div>
                            <div className={styles.messages}>
                                <p>Messages</p>
                                <p className={styles.countP}>0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );

}

export default Discussions;