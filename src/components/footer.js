import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import './footer.css'

function Footer () {
    return (
        <div className="footer">
        <div className="left-footer">
            <a href="">Prompt Generator</a>
            <a href="">Dweep Daily</a>
            <a href="">All Contributors</a>
            <a href="">Your data on Dweep.io</a>
            <a href="">Contribute to Dweep</a>
        </div>

        <div className="right-footer">
            <a href="">Dweep.io</a>
            <a href="">Made with love in India</a>
            <div className="socials">
                <img src={linkedin} alt="linkedin-logo"/>
                <img src={instagram} alt="instagram-logo"/>
            </div>
            <a href="" className="email">hello@dweep.io</a>
        </div>
    </div>
    );
}

export default Footer;