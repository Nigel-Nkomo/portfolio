import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (open && ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
      console.log(ref.current);
      console.log(event.target);
      console.log(!ref.current.contains(event.target));
      console.log(open);
    };

    document.addEventListener("mousedown", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
    };
  }, [open]);

  return (
    <>
      <nav className="navigation">
        <h1 className="logo">nigel</h1>

        <div ref={ref} className={`default ${open ? "nav-links" : ""}`}>
          <NavLink
            to="/home"
            alt="home-page"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="portfolio"
            alt="portfolio-page"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="contact"
            alt="contact-page"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Contact me
          </NavLink>
        </div>
        <button className="toggle-btn" onClick={() => setOpen((prev) => !prev)}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </>
  );
}
