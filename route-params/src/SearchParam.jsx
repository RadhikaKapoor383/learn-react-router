import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import Products from './public/Products.jsx';
import './SearchParam.css';

function SearchParam() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link className="brand" to="/">Search Params</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products?category=shoes&color=red&size=medium&price=low&sort=asc">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1 className="not-found">404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default SearchParam;
