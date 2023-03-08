import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__image"></div>
      <div className="about__content">
        <h1 className="about__heading">About</h1>
        <p className="about__text">
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in Poznan, Poland, but I’m happy working remotely. When I’m
          not coding, you’ll find me outdoors. I love being out in nature
          whether that’s going for a walk or a run. I’d love you to check out my
          work.
        </p>
        <Link className="about__btn" to="portfolio">
          Go to portfolio
        </Link>
      </div>
    </section>
  );
}
