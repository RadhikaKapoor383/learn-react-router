import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Profile from './pages/Profile.jsx';
import NotFound from './pages/NotFound.jsx';
import Layout from './pages/Layout.jsx';

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/profile/:username" element={<Profile />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
        <Route index element={<Home />} />
        {/* path='/about' means: when URL is '/about', show About */}
        <Route path='/about' element={<About />} />
        {/* path='/products' shows the Products list page */}
        {/* <Route path='/products' element={<Products />} /> */}
        {/* path='*' catches everything else — like a 404 page */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;