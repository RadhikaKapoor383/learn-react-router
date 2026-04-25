import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>🏠 Welcome Home!</h1>
      <p>This is the home page of our React Router app.</p>
      <Link to="/about">
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Go to About →
        </button>
      </Link>
    </div>
  );
}

export default Home;