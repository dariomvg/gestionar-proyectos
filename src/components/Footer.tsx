import "../styles/Footer.css";
import { Logo } from './Logo';
import iconGithubFooter from "../assets/icons/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container-first">
            <Logo />
            <b>|</b>
            <p>Todos lo derechos reservados 2025</p>
        </div>
            <a href="https://github.com/dariomvg" target="_blank" rel="noopener noreferrer">
                <img src={iconGithubFooter.src} alt="github icon" width={25} height={25} className="footer-icon-github" />
            </a>
        
    </footer>
  )
}
