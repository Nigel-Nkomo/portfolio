import SVG from "./SVG";

export default function Hero() {
  return (
    <>
      <section className="hero__image">
        <div className="hero__content">
          <h1 className="hero__heading">
            Hello. My name's Nigel and I love building websites
          </h1>
          <a className="hero__button" href="#about">
            <SVG />
            <span className="hero__text">About me</span>
          </a>
        </div>
      </section>
    </>
  );
}
