import { useParams } from 'react-router-dom';

function Profile() {
  const { name } = useParams();

  return (
    <div>
      <h1>{name} ka Profile</h1>
      <p>Welcome, {name}!</p>
    </div>
  );
}

export default Profile;
