import SVG from "./SVG";

export default function Hero() {
  return (
    <>
      <div className="hero-image">
        <div className="hero-content">
          <h1 className="hero-heading">
            Hello. My name's Nigel and I love building websites
          </h1>
          <a className="btn" href="#about-section">
            <SVG />
            <span>About me</span>
          </a>
        </div>
      </div>
    </>
  );
}
