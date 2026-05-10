// Profile.jsx
import { useParams } from 'react-router-dom';

function Profile() {
  const { name } = useParams();  // URL se name pakda

  return (
    <div>
      <h1>{name} ka Profile</h1>
      <p>Welcome, {name}!</p>
    </div>
  );
}

export default Profile;