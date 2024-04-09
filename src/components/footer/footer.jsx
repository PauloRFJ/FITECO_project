import "./footer.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <footer className="footer">
        <img src="../src/img/Fiteco.png" alt="Logo" className="company-logo" />
        <div className="social-icons">
          <a href="#" className='github'><FaGithub/></a>
          <a href="#" className='linkedin'><FaLinkedin/></a>
          <a href="#" className='instagram'><FaInstagram/></a>
        </div>
      </footer>
        </div>
    );
}

export default Footer;