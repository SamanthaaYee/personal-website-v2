import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <p>──────────── *°｡･:*˚:✧｡✩‧₊</p>
            <h3>let's build something cool together!</h3>
            <footer>
                <div className="social-icons">
                    <a href="mailto:sayee@uwaterloo.ca" className="icon rise-animation email"></a>
                    <a href="https://www.linkedin.com/in/samanthayee6" className="icon rise-animation linkedin" target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://github.com/SamanthaaYee" className="icon rise-animation github" target="_blank" rel="noopener noreferrer"></a>
                </div>
                <p className="highlight-text">Samantha Yee © 2025</p>
            </footer>
        </div>
    );
}

export default Footer;