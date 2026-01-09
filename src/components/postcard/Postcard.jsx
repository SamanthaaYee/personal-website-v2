import './Postcard.css';
import postcardImage from '/src/assets/images/postcard.jpg';
import pin from '/src/assets/images/pin.png';

function Postcard() {
    return (
        <div className="postcard-container">
            <img src={postcardImage} className="postcard-image" alt="postcard image" style={{ height: '30rem' }} />
            <p>want to work together? <br></br>send me a message! <br></br>hope to hear from you soon :)</p>
            <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="855507b2-e06d-4e81-9cc8-7b3e20a795bc" />

                <input type="text" id="name" name="name" placeholder="name:" required />
                <input type="email" id="email" name="email" placeholder="email:" required />
                <textarea type="text" id="message" name="message" placeholder="message:" required />

                {/* Honeypot Spam Protection */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <button type="submit">send postcard</button>
            </form>
            <img src={pin} alt="Pin" className="pin-image" />
        </div>
    )
}

export default Postcard;