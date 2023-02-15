import vector from '../images/vector.png'
import './header.css'

function Header() {
    return (
        <div className="header">
        <div className="header-text">
            <h3>An inspiring design delivered to your inbox every morning</h3>
            <p class="team">Our team scouts the internet for the best designs, illustrations and art and delivers a
                truly inspiring
                one every day to your inbox</p>
            <h4>Show me how it looks</h4>
            <div className="register">
                <input type="text" placeholder="Your e-mail address"/>
                <button>Register Now</button>
            </div>

            <p className="spam">Free - No Spam - No Data Sharing</p>
        </div>
        <img src={vector} alt="vector-image"/>
    </div>
    );
}

export default Header;