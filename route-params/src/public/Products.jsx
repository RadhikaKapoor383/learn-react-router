// Products.jsx
import { useSearchParams } from 'react-router-dom';

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL se values nikalo
  const category = searchParams.get("category") || "shoes";
  const color = searchParams.get("color") || "red";
  const size = searchParams.get("size") || "medium";
  const filterPrice = searchParams.get("price") || "low";
  const sort = searchParams.get("sort") || "asc";
  const other = searchParams.get("other") || "other";
  const another = searchParams.get("another") || "another";

  function changeFilter(key, value) {
    setSearchParams({ category, color, size, price: filterPrice, sort, other, another, [key]: value });
    // setSearchParams URL ko update karta hai
  }

  return (
    <main className="products-page">
      <section className="products-header">
        <p className="eyebrow">Products</p>
        <h1>Filter products through the URL</h1>
        <p>
          Click a button and watch the browser address update with new search
          parameters.
        </p>
      </section>

      <section className="filter-section" aria-label="Product filters">
        <div className="filter-group">
          <h2>Category</h2>
        <button onClick={() => changeFilter("category", "shoes")}>Shoes</button>
        <button onClick={() => changeFilter("category", "bags")}>Bags</button>
        <button onClick={() => changeFilter("category", "accessories")}>Accessories</button>
        <button onClick={() => changeFilter("category", "clothing")}>Clothing</button>
        <button onClick={() => changeFilter("category", "watches")}>Watches</button>
        <button onClick={() => changeFilter("category", "jewelry")}>Jewelry</button>
      </div>

        <div className="filter-group">
          <h2>Color</h2>
        <button onClick={() => changeFilter("color", "red")}>Red</button>
        <button onClick={() => changeFilter("color", "blue")}>Blue</button>
        <button onClick={() => changeFilter("color", "green")}>Green</button>
        <button onClick={() => changeFilter("color", "black")}>Black</button>
        <button onClick={() => changeFilter("color", "white")}>White</button>
        <button onClick={() => changeFilter("color", "yellow")}>Yellow</button>
      </div>

        <div className="filter-group">
          <h2>Size</h2>
        <button onClick={() => changeFilter("size", "small")}>Small</button>
        <button onClick={() => changeFilter("size", "medium")}>Medium</button>
        <button onClick={() => changeFilter("size", "large")}>Large</button>
        <button onClick={() => changeFilter("size", "x-large")}>X-Large</button>
      </div>

        <div className="filter-group">
          <h2>Price</h2>
        <button onClick={() => changeFilter("price", "low")}>Low</button>
        <button onClick={() => changeFilter("price", "medium")}>Medium</button>
        <button onClick={() => changeFilter("price", "high")}>High</button>
      </div>

        <div className="filter-group">
          <h2>Sort</h2>
        <button onClick={() => changeFilter("sort", "asc")}>Sort Ascending</button>
        <button onClick={() => changeFilter("sort", "desc")}>Sort Descending</button>
      </div>

        <div className="filter-group">
          <h2>Extra</h2>
        <button onClick={() => changeFilter("other", "other")}>Other</button>
        <button onClick={() => changeFilter("another", "another")}>Another</button>
      </div>
      </section>

      <section className="active-filters" aria-label="Active filters">
        <h2>Active Search Params</h2>
        <div className="active-grid">
          <p><span>Category</span>{category}</p>
          <p><span>Color</span>{color}</p>
          <p><span>Size</span>{size}</p>
          <p><span>Price</span>{filterPrice}</p>
          <p><span>Sort</span>{sort}</p>
          <p><span>Other</span>{other}</p>
          <p><span>Another</span>{another}</p>
        </div>
      </section>
    </main>
  );
}

export default Products;
