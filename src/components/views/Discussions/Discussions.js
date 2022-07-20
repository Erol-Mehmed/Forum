




















import styles from './Discussions.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faPalette, faComputer, faNewspaper, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faPlaystation, faXbox } from "@fortawesome/free-brands-svg-icons";

function Discussions() {

    return (

        <div className={styles.body}>

            {/* {Communities} */}

            <div className={styles.communities}>
                <div className={styles.header}>
                    <h3>Community</h3>
                </div>
                <div className={styles.commSections}>
                    <div className={styles.discSections}>
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
                    <div className={styles.discSections}>
                        <FontAwesomeIcon icon={faPalette} className={styles.icon} />
                        <div className={styles.column}>
                            <p className={styles.heading}>Original Works</p>
                            <p className={styles.description}>This is the place to share the fruits of your creative bursts. You can share art, stories and anything that is your own creation.</p>
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

            {/* {Gaming} */}

            <div className={styles.gaming}>
                <div className={styles.header}>
                    <h3>Gaming</h3>
                </div>
                <div className={styles.gamingSections}>
                    <div className={styles.discSections}>
                        <FontAwesomeIcon icon={faNewspaper} className={styles.icon} />
                        <div className={styles.column}>
                            <p className={styles.heading}>News</p>
                            <p className={styles.description}>Read, post and discuss the latest in our beloved medium.</p>
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
                    <div className={styles.discSections}>
                        <FontAwesomeIcon icon={faComputer} className={styles.icon} />
                        <div className={styles.column}>
                            <p className={styles.heading}>PC</p>
                            <p className={styles.description}>The platform where all begun.</p>
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
                    <div className={styles.discSections}>
                        <FontAwesomeIcon icon={faPlaystation} className={styles.icon} />
                        <div className={styles.column}>
                            <p className={styles.heading}>Playstation</p>
                            <p className={styles.description}>The place to discuss all about the legendary console brand of Sony.</p>
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
                    <div className={styles.discSections}>
                        <FontAwesomeIcon icon={faXbox} className={styles.icon} />
                        <div className={styles.column}>
                            <p className={styles.heading}>Xbox</p>
                            <p className={styles.description}>Lets talk everything about the Microsoft's famed consoles.</p>
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
                    <div className={styles.discSectionsLast}>
                        <FontAwesomeIcon icon={faGamepad} className={styles.icon} />
                        <div className={styles.column}>
                            <p className={styles.heading}>Nintendo</p>
                            <p className={styles.description}>It wouldn't be a gaming forum without the classic Japanese game company.</p>
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