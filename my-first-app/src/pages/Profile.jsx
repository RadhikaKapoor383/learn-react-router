import { useParams, Link } from 'react-router-dom';

function Profile() {
  const { username } = useParams();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>👤 User Profile</h1>
      <div style={{ fontSize: '24px', marginBottom: '20px', fontWeight: 'bold', color: '#61dafb' }}>
        @{username}
      </div>
      <p>This is the profile page for user: <strong>{username}</strong></p>
      <p>Here you can see user details, activity, and preferences.</p>
      <div style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
        <p>Try changing the URL parameter to view different user profiles!</p>
        <p>Example: /profile/alice, /profile/bob, etc.</p>
      </div>
      <Link to="/">
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Go Back Home
        </button>
      </Link>
    </div>
  );
}

export default Profile;
