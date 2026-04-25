import { Link } from 'react-router-dom';

function About() {
    return (
        <div style={{ textAlign: 'center', padding: '50px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>📖 About Us</h1>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#333' }}>
                Welcome to the About page! Here's what you should know about our React Router application.
            </p>
            <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', textAlign: 'left' }}>
                <h3>What is React Router?</h3>
                <p>
                    React Router is a library that enables navigation between different views in a single-page application (SPA) without full page reloads.
                    It uses declarative routing to manage the browser history and display different components based on the URL.
                </p>
                <h3>Features We're Using:</h3>
                <ul>
                    <li><strong>BrowserRouter</strong> - Provides routing context</li>
                    <li><strong>Routes & Route</strong> - Defines application routes</li>
                    <li><strong>Link & NavLink</strong> - Navigation between routes</li>
                    <li><strong>Dynamic Routing</strong> - Using URL parameters like :username</li>
                    <li><strong>Wildcard Routes</strong> - Handling 404 pages</li>
                </ul>
            </div>
        </div>
    );
}

export default About;