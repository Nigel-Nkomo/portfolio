import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <>
      <div className="cta-box">
        <h1 className="cta-heading">Interested in doing a project together?</h1>
        <div className="rule"></div>
        <Link className="cta-btn" to="contact/">
          Contact Me
        </Link>
      </div>
    </>
  );
}
