import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div style={{ textAlign: 'center', padding: '50px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '72px', margin: '0', color: '#ff6b6b' }}>404</h1>
            <h2>Page Not Found</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#666' }}>
                Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                <p>This is a wildcard route that catches any undefined paths in the application.</p>
                <p>In React Router, the route with path="*" captures all unmatched routes.</p>
            </div>
            <Link to="/">
                <button style={{
                    marginTop: '20px',
                    padding: '12px 30px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    backgroundColor: '#61dafb',
                    border: 'none',
                    borderRadius: '4px',
                    color: '#282c34',
                    fontWeight: 'bold'
                }}>
                    ← Go Back Home
                </button>
            </Link>
        </div>
    );
}

export default NotFound;