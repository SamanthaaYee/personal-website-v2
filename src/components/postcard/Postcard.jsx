import './Postcard.css';
import postcardImage from '/src/assets/images/postcard.jpg';

function Postcard() {
    return (
        <div>
            <img src={postcardImage} alt="Postcard" />
        </div>
    )
}

export default Postcard;