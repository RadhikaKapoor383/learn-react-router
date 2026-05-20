import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Profile from './Profile.jsx';

function UseParam() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/user/ahmed">Ahmed</Link> |{" "}
        <Link to="/user/sara">Sara</Link> |{" "}
        <Link to="/user/ali">Ali</Link> |{" "}
        <Link to="/user/Asghar">Asghar</Link> |{" "}
      </nav>

      <Routes>
        <Route path="/user/:name" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default UseParam;
