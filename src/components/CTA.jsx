import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <>
      <div className="cta">
        <h1 className="cta__heading">
          Interested in doing a project together?
        </h1>
        <div className="cta__rule"></div>
        <Link className="cta__btn" to="contact/">
          Contact Me
        </Link>
      </div>
    </>
  );
}
