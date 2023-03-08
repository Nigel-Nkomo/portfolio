import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__links">
            <Link to="home/" alt="home-page" className="footer__link">
              Home
            </Link>
            <Link to="portfolio/" alt="portfolio-page" className="footer__link">
              Portfolio
            </Link>
            <Link to="contact/" alt="contact-page" className="footer__link">
              Contact me
            </Link>
          </div>
          <div className="social-media">
            <a className="social-media__link">
              <GitHubIcon />
            </a>
            <a className="social-media__link">
              <LinkedInIcon />
            </a>
            <a className="social-media__link">
              <EmailIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
