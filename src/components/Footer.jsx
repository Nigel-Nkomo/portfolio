import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-links">
            <Link to="home/" alt="home-page" className="footer-link">
              Home
            </Link>
            <Link to="portfolio/" alt="portfolio-page" className="footer-link">
              Portfolio
            </Link>
            <Link to="contact/" alt="contact-page" className="footer-link">
              Contact me
            </Link>
          </div>
          <div className="social-media-links">
            <a className="social-media-link">
              <GitHubIcon />
            </a>
            <a className="social-media-link">
              <LinkedInIcon />
            </a>
            <a className="social-media-link">
              <EmailIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
