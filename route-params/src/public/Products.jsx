// Products.jsx
import { useSearchParams } from 'react-router-dom';

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL se values nikalo
  const category = searchParams.get("category") || "shoes";
  const color = searchParams.get("color") || "red";

  function changeFilter(key, value) {
    setSearchParams({ category, color, [key]: value });
    // setSearchParams URL ko update karta hai
  }

  return (
    <div>
      <h1>Products</h1>

      <div>
        <button onClick={() => changeFilter("category", "shoes")}>Shoes</button>
        <button onClick={() => changeFilter("category", "bags")}>Bags</button>
        <button onClick={() => changeFilter("category", "accessories")}>Accessories</button>
        <button onClick={() => changeFilter("category", "clothing")}>Clothing</button>
      </div>

      <div>
        <button onClick={() => changeFilter("color", "red")}>Red</button>
        <button onClick={() => changeFilter("color", "blue")}>Blue</button>
        <button onClick={() => changeFilter("color", "green")}>Green</button>
        <button onClick={() => changeFilter("color", "black")}>Black</button>
        <button onClick={() => changeFilter("color", "white")}>White</button>
      </div>

      <p style={{fontSize: "20"}}>Category: {category}</p>
      <p>Color: {color}</p>
    </div>
  );
}

export default Products;