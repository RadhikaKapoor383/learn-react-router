import { Link } from 'react-router-dom';

function Home() {
    return (
        <div style={{ textAlign: 'center', padding: '50px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>🏠 Welcome to Our React Router App</h1>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#333' }}>
                This is the home page of our React Router application. Here you can navigate to different pages using the navigation bar above.
            </p>
            <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                <h3>Quick Navigation</h3>
                <p>Click on the links in the navbar to explore:</p>
                <ul style={{ textAlign: 'left', display: 'inline-block' }}>
                    <li><strong>About</strong> - Learn more about our app</li>
                    <li><strong>Contact</strong> - Get in touch with us</li>
                    <li><strong>Profile</strong> - View user profiles with dynamic routing</li>
                </ul>
            </div>
            <div style={{ marginTop: '30px' }}>
                <p style={{ color: '#666' }}>React Router enables client-side navigation without full page reloads.</p>
            </div>
        </div>
    );
}

export default Home;