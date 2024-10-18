import "../styles/Footer.css";
import { Logo } from './Logo';
import iconGithubFooter from "../assets/icons/github.svg";

export const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
        <div className="footer-container-first">
            <Logo />
            <b>|</b>
            <p>todos lo derechos reservados 2024</p>
        </div>
        <div className="footer-container-second">
            <h3>© Dario Martinez</h3>
            <a href="https://github.com/dariomvg" target="_blank">
                <img src={iconGithubFooter.src} alt="github icon" width={20} height={20} className="footer-icon-github" />
            </a>
        </div>
    </footer>
  )
}
