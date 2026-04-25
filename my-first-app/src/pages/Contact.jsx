import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>📧 Contact Us</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#333' }}>
        Get in touch with us through any of the channels below. We'd love to hear from you!
      </p>
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h3>Contact Information</h3>
        <p>
          <strong>📧 Email:</strong> <a href="mailto:info@example.com" style={{ color: '#61dafb', textDecoration: 'none' }}>info@example.com</a>
        </p>
        <p>
          <strong>📱 Phone:</strong> +1 (555) 123-4567
        </p>
        <p>
          <strong>📍 Location:</strong> 123 Web Street, Tech City, TC 12345
        </p>
        <p>
          <strong>⏰ Business Hours:</strong> Monday - Friday, 9 AM - 6 PM EST
        </p>
      </div>
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fffbea', borderRadius: '8px' }}>
        <h3>Send us a Message</h3>
        <p>Fill out the form below and we'll get back to you soon!</p>
        <form style={{ marginTop: '20px' }}>
          <input 
            type="text" 
            placeholder="Your Name" 
            style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
          <textarea 
            placeholder="Your Message" 
            rows="5"
            style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd', fontFamily: 'inherit' }}
          ></textarea>
          <button 
            type="submit" 
            style={{ padding: '10px 30px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#61dafb', border: 'none', borderRadius: '4px', color: '#282c34', fontWeight: 'bold' }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;