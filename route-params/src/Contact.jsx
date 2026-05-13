function Contact() {
  return (
    <main className="page-shell">
      <section className="contact-layout">
        <div className="info-hero contact-copy">
          <p className="eyebrow">Contact</p>
          <h1>Have a question about this routing demo?</h1>
          <p>
            Send a message from this sample form or use the contact details to
            imagine how a real store support page could work.
          </p>
        </div>

        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>

          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>

          <label>
            Message
            <textarea rows="5" placeholder="Write your message" />
          </label>

          <button type="button">Send Message</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
