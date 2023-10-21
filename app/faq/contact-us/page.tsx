import "./page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faPencilAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <>
      <div className="contact-bg">
        <h1 className="contact-header">
          Contact Us
          <FontAwesomeIcon icon={faPaperPlane} style={{ marginLeft: "13px" }} />
        </h1>

        <p className="contact-subheader">
          Reach out to us for any inquiries or support to enhance your learning
          experience on VocaVista
        </p>
        <div className="contact-container">
          <h2 className="contact-form-header">VocaVista</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">
                <FontAwesomeIcon icon={faUser} />
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <FontAwesomeIcon icon={faEnvelope} />
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">
                <FontAwesomeIcon icon={faPencilAlt} />
              </label>
              <textarea
                id="message"
                name="message"
                rows={8}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
