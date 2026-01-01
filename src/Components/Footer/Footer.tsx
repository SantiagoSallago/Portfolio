import './Footer.css';
import './FooterResponsive.css'
import ig from '../../assets/instagram-brands-solid-full.svg';
import li from '../../assets/square-linkedin-brands-solid-full.svg';
import gh from '../../assets/github-brands-solid-full.svg';

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2025 Santiago Ariel Sallago </p>
            <div className="social">
                <a href="https://github.com/SantiagoSallago" target="_blank" rel="noreferrer"><img src={gh} alt="" /></a>
                <a href="https://www.linkedin.com/in/santiago-sallago-93224921b/" target="_blank" rel="noreferrer"><img src={li} alt="" /></a>
                <a href="https://www.instagram.com/santiago_sallago1/" target="_blank" rel="noreferrer"><img src={ig} alt="" /></a>
            </div>
        </footer>
    )
}
export default Footer;