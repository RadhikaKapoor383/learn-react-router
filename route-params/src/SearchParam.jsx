import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import Products from './public/Products.jsx';

function SearchParam() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/products?category=shoes&color=red">Products Page</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default SearchParam;
