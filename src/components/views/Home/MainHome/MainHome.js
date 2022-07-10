




















import './MainHome.css';
import firstImage from '../../../images/firstImage3.jpg';
import secondImage from '../../../images/homeBB.jpg';

function Welcome(props) {

    return (
        <>
        <h3>{props.name} welcome to <br/> Game Insiders</h3>
        <h4>You have:</h4>
        <p>{props.topics} topics</p>
        <p>{props.posts} posts</p>
        </>
    );

}


function Main() {

    return (

        <main>
            <img src={firstImage} />
            <img src={secondImage} />
            <div id="mainDiv">
                <Welcome name="Anonymous" topics="0" posts="0" />
            </div>
        </main>

    );

}

export default Main;