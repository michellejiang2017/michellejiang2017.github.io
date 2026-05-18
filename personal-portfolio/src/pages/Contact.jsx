import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section>
      <h1>Contact Me</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required />

        <button type="submit">Send Message</button>
      </form>

      {submitted && <p className="success">Thanks! Your message was submitted.</p>}
    </section>
  );
}

export default Contact;