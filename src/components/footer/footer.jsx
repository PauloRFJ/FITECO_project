import "./footer.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <footer className="footer">
        <img src="../../../public/Fiteco.png" alt="Logo" className="company-logo" />
        <div className="social-icons">
          <Link 
            to="https://github.com/PauloRFJ" 
            className='github'
            target="_blank"
            ><FaGithub/></Link>
          <Link 
            to="https://www.linkedin.com/in/paulo-roberto-freitas-junior-782711261/" 
            className='linkedin'
            target="_blank"
            ><FaLinkedin/></Link>
          <Link 
            to="https://www.instagram.com/proberto.fjr/" 
            className='instagram'
            target="_blank"
            ><FaInstagram/></Link>
        </div>
      </footer>
        </div>
    );
}

export default Footer;