import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="navigation">
        <h1 className="logo">nigel</h1>
        <div className="nav-links">
          <Link to="/home" alt="home-page" className="nav-link">
            Home
          </Link>
          <Link to="portfolio" alt="portfolio-page" className="nav-link">
            Portfolio
          </Link>
          <Link to="contact" alt="contact-page" className="nav-link">
            Contact me
          </Link>
        </div>
      </nav>
    </>
  );
}
