// Products.jsx
import { useSearchParams } from 'react-router-dom';

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL se values nikalo
  const category = searchParams.get("category") || "shoes" || "bags" || "accessories" || "clothing" || "watches" || "jewelry";
  const color = searchParams.get("color") || "red" || "blue" || "green" || "black" || "white" || "yellow";
  const size = searchParams.get("size") || "medium" || "large" || "small" || "x-large";
  const filterPrice = searchParams.get("price") || "low" || "medium" || "high";
  const sort = searchParams.get("sort") || "asc" || "desc";
  const other = searchParams.get("other") || "other";
  const another = searchParams.get("another") || "another";

  function changeFilter(key, value) {
    setSearchParams({ category, color, size, filterPrice, sort, other, another, [key]: value });
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
        <button onClick={() => changeFilter("category", "watches")}>Watches</button>
        <button onClick={() => changeFilter("category", "jewelry")}>Jewelry</button>
      </div>

      <div>
        <button onClick={() => changeFilter("color", "red")}>Red</button>
        <button onClick={() => changeFilter("color", "blue")}>Blue</button>
        <button onClick={() => changeFilter("color", "green")}>Green</button>
        <button onClick={() => changeFilter("color", "black")}>Black</button>
        <button onClick={() => changeFilter("color", "white")}>White</button>
        <button onClick={() => changeFilter("color", "yellow")}>Yellow</button>
      </div>

      <div>
        <button onClick={() => changeFilter("size", "small")}>Small</button>
        <button onClick={() => changeFilter("size", "medium")}>Medium</button>
        <button onClick={() => changeFilter("size", "large")}>Large</button>
        <button onClick={() => changeFilter("size", "x-large")}>X-Large</button>
      </div>

      <div>
        <button onClick={() => changeFilter("price", "low")}>Low</button>
        <button onClick={() => changeFilter("price", "medium")}>Medium</button>
        <button onClick={() => changeFilter("price", "high")}>High</button>
      </div>

      <div>
        <button onClick={() => changeFilter("sort", "asc")}>Sort Ascending</button>
        <button onClick={() => changeFilter("sort", "desc")}>Sort Descending</button>
      </div>

      <div>
        <button onClick={() => changeFilter("other", "other")}>Other</button>
        <button onClick={() => changeFilter("another", "another")}>Another</button>
      </div>

      <p>Category: {category}</p>
      <p>Color: {color}</p>
      <p>Size: {size}</p>
      <p>Price: {filterPrice}</p>
      <p>Sort: {sort}</p>
      <p>Other: {other}</p>
      <p>Another: {another}</p>
    </div>
  );
}

export default Products;