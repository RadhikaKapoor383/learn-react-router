import { useSearchParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Runner Flex Sneakers', category: 'shoes', color: 'red', size: 'medium', price: 65 },
  { id: 2, name: 'Street Low Tops', category: 'shoes', color: 'white', size: 'small', price: 48 },
  { id: 3, name: 'Trail Grip Boots', category: 'shoes', color: 'black', size: 'large', price: 120 },
  { id: 4, name: 'Campus Backpack', category: 'bags', color: 'blue', size: 'large', price: 58 },
  { id: 5, name: 'Leather Tote', category: 'bags', color: 'brown', size: 'x-large', price: 85 },
  { id: 6, name: 'Mini Crossbody Bag', category: 'bags', color: 'green', size: 'small', price: 35 },
  { id: 7, name: 'Travel Duffel', category: 'bags', color: 'black', size: 'x-large', price: 95 },
  { id: 8, name: 'Cotton Hoodie', category: 'clothing', color: 'red', size: 'large', price: 72 },
  {id: 9, name: 'sweatshirt', category: 'clothing', color: 'baby blue', size: 'large', price: 72 },
  { id: 10, name: 'Linen Shirt', category: 'clothing', color: 'white', size: 'medium', price: 42 },
  { id: 11, name: 'Denim Jacket', category: 'clothing', color: 'blue', size: 'x-large', price: 110 },
  { id: 12, name: 'Leather Strap Watch', category: 'watches', color: 'black', size: 'medium', price: 180 },
  { id: 13, name: 'Sport Timer Watch', category: 'watches', color: 'yellow', size: 'large', price: 135 },
  { id: 14, name: 'Classic Silver Watch', category: 'watches', color: 'white', size: 'small', price: 220 },
  { id: 15, name: 'Gold Hoop Earrings', category: 'jewelry', color: 'yellow', size: 'small', price: 75 },
  { id: 16, name: 'Emerald Pendant', category: 'jewelry', color: 'green', size: 'medium', price: 145 },
  { id: 17, name: 'Black Stone Ring', category: 'jewelry', color: 'black', size: 'small', price: 288 },
  { id: 18, name: 'Silk Scarf', category: 'accessories', color: 'red', size: 'medium', price: 32 },
  { id: 19, name: 'Canvas Belt', category: 'accessories', color: 'blue', size: 'large', price: 28 },
  { id: 20, name: 'Winter Beanie', category: 'accessories', color: 'green', size: 'small', price: 22 },
  { id: 21, name: 'Aviator Sunglasses', category: 'accessories', color: 'black', size: 'medium', price: 150 },
  { id: 22, name: 'Round Sunglasses', category: 'accessories', color: 'yellow', size: 'medium', price: 130 },
  {id: 23, name: "T-Shirt", category: 'clothing', color: 'black', size: 'large', price: 250},
];

const priceFilters = {
  all: { label: 'All Prices', min: 0, max: Infinity },
  low: { label: 'Low', min: 0, max: 50 },
  medium: { label: 'Medium', min: 51, max: 100 },
  high: { label: 'High', min: 101, max: Infinity },
};

function titleCase(value) {
  return value
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function uniqueValues(items, key) {
  return [...new Set(items.map((item) => item[key]))];
}

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const categories = uniqueValues(products, 'category');
  const category = searchParams.get('category') || 'shoes';
  const color = searchParams.get('color') || 'all';
  const size = searchParams.get('size') || 'all';
  const price = searchParams.get('price') || 'all';
  const sort = searchParams.get('sort') || 'asc';

  const categoryProducts = products.filter((product) => product.category === category);
  const colors = uniqueValues(categoryProducts, 'color');
  const sizes = uniqueValues(categoryProducts, 'size');
  const activePriceFilter = priceFilters[price] || priceFilters.all;

  const filteredProducts = categoryProducts
    .filter((product) => color === 'all' || product.color === color)
    .filter((product) => size === 'all' || product.size === size)
    .filter((product) => product.price >= activePriceFilter.min && product.price <= activePriceFilter.max)
    .sort((first, second) => (sort === 'asc' ? first.price - second.price : second.price - first.price));

  function updateFilters(nextValues) {
    setSearchParams({
      category,
      color,
      size,
      price,
      sort,
      ...nextValues,
    });
  }

  function changeCategory(nextCategory) {
    setSearchParams({
      category: nextCategory,
      color: 'all',
      size: 'all',
      price: 'all',
      sort,
    });
  }

  return (
    <main className="products-page">
      <section className="products-header">
        <p className="eyebrow">Products</p>
        <h1>Filter products through the URL</h1>
        <p>
          Choose a category first. The color, size, and price filters update
          from that category, then the list sorts by price.
        </p>
      </section>

      <section className="filter-section" aria-label="Product filters">
        <div className="filter-group">
          <h2>Category</h2>
          {categories.map((item) => (
            <button
              className={category === item ? 'active-filter' : ''}
              key={item}
              onClick={() => changeCategory(item)}
            >
              {titleCase(item)}
            </button>
          ))}
        </div>

        <div className="filter-group">
          <h2>Color</h2>
          <button
            className={color === 'all' ? 'active-filter' : ''}
            onClick={() => updateFilters({ color: 'all' })}
          >
            All Colors
          </button>
          {colors.map((item) => (
            <button
              className={color === item ? 'active-filter' : ''}
              key={item}
              onClick={() => updateFilters({ color: item })}
            >
              {titleCase(item)}
            </button>
          ))}
        </div>

        <div className="filter-group">
          <h2>Size</h2>
          <button
            className={size === 'all' ? 'active-filter' : ''}
            onClick={() => updateFilters({ size: 'all' })}
          >
            All Sizes
          </button>
          {sizes.map((item) => (
            <button
              className={size === item ? 'active-filter' : ''}
              key={item}
              onClick={() => updateFilters({ size: item })}
            >
              {titleCase(item)}
            </button>
          ))}
        </div>

        <div className="filter-group">
          <h2>Price Filter</h2>
          {Object.entries(priceFilters).map(([key, filter]) => (
            <button
              className={price === key ? 'active-filter' : ''}
              key={key}
              onClick={() => updateFilters({ price: key })}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="filter-group">
          <h2>Price Sort</h2>
          <button
            className={sort === 'asc' ? 'active-filter' : ''}
            onClick={() => updateFilters({ sort: 'asc' })}
          >
            Low to High
          </button>
          <button
            className={sort === 'desc' ? 'active-filter' : ''}
            onClick={() => updateFilters({ sort: 'desc' })}
          >
            High to Low
          </button>
        </div>
      </section>

      <section className="active-filters" aria-label="Active filters">
        <h2>Active Search Params</h2>
        <div className="active-grid">
          <p><span>Category</span>{category}</p>
          <p><span>Color</span>{color}</p>
          <p><span>Size</span>{size}</p>
          <p><span>Price Filter</span>{price}</p>
          <p><span>Price Sort</span>{sort}</p>
          <p><span>Results</span>{filteredProducts.length}</p>
        </div>
      </section>

      <section className="product-results" aria-label="Filtered products">
        <div className="results-heading">
          <h2>{titleCase(category)} Results</h2>
          <p>{filteredProducts.length} products found</p>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className={`product-swatch ${product.color}`} />
              <h3>{product.name}</h3>
              <p>{titleCase(product.color)} / {titleCase(product.size)}</p>
              <strong>${product.price}</strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Products;
