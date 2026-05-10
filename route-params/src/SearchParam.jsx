// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from '../Products';

function SearchParam() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default SearchParam;