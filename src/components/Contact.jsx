import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "./Contact.css";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJSON = Object.fromEntries(formData.entries());
    console.log(formJSON);
  };

  return (
    <>
      <section className="contact">
        <div className="contact-text">
          <h1 className="contact-heading">Get in Touch</h1>
          <div className="text">
            <p>
              I’d love to hear about what you’re working on and how I could
              help. I’m currently looking for a new role and am open to a wide
              range of opportunities. My preference would be to find a position
              in a company in Poznan, but I’m also happy to hear about
              opportunites that don’t fit that description. I’m a hard-working
              and positive person who will always approach each task with a
              sense of purpose and attention to detail. Please do feel free to
              check out my online profiles below and get in touch using the
              form.
            </p>
            <div className="social-media-links">
              <a className="contact-link">
                <GitHubIcon />
              </a>
              <a className="contact-link">
                <LinkedInIcon />
              </a>
              <a className="contact-link">
                <EmailIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="form-box">
          <h1 className="contact-heading">Contact Me</h1>
          <form method="post" onSubmit={handleSubmit}>
            <label htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                placeholder="Michael Burnham"
                name="name"
              />
            </label>

            <label htmlFor="email">
              Email
              <input
                type="text"
                id="email"
                placeholder="email@example.com"
                name="email"
              />
            </label>

            <label htmlFor="message">
              Message
              <textarea
                id="message"
                rows="8"
                placeholder="How can I help?"
                name="message"
              ></textarea>
            </label>

            <button type="submit" className="btn form-btn">
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
