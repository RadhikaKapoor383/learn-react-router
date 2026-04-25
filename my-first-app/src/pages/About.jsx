import { Link, NavLink } from 'react-router-dom';

function About() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>📖 About Us</h1>
      <p>This is the about page. We are learning React Router!</p>
      <NavLink to="/">
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          ← Back to Home
        </button>
      </NavLink>
    </div>
  );
}

export default About;