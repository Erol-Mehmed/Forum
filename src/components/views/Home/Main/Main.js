




















import './Main.css';
import firstImage from '../../../images/firstImage3.jpg';
import secondImage from '../../../images/secondImage.jpg';

function Welcome(props) {

    return (
        <h2>{props.name} welcome to Game Insiders</h2>
    );

}


function Main() {

    return (

        <main>
            <div id="mainFlexDiv">
            <img src={firstImage} />
            <img src={secondImage} />
                <div id="mainDiv">
                <Welcome name="Anonymous"/>
                </div>
            </div>
        </main>

    );

}

export default Main;