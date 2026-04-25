import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

function App() {
  return (
    <div>
      <h1>My First React Router App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:username" element={<h2>User Profile - Coming Soon!</h2>} />
          <Route path="*" element={<Not-Found />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;