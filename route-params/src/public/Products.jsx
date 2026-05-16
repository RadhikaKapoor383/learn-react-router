import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Runner Flex Sneakers', category: 'shoes', color: 'red', size: 'medium', price: 65, displaySize: 'medium' },
  { id: 2, name: 'Street Low Tops', category: 'shoes', color: 'white', size: 'small', price: 48, displaySize: 'small' },
  { id: 3, name: 'Trail Grip Boots', category: 'shoes', color: 'black', size: 'large', price: 120, displaySize: 'large' },
  { id: 4, name: 'Campus Backpack', category: 'bags', color: 'blue', size: 'large', price: 58, displaySize: 'large' },
  { id: 5, name: 'Leather Tote', category: 'bags', color: 'brown', size: 'x-large', price: 85, displaySize: 'wide' },
  { id: 6, name: 'Mini Crossbody Bag', category: 'bags', color: 'green', size: 'small', price: 35, displaySize: 'small' },
  { id: 7, name: 'Travel Duffel', category: 'bags', color: 'black', size: 'x-large', price: 95, displaySize: 'wide' },
  { id: 8, name: 'Cotton Hoodie', category: 'clothing', color: 'red', size: 'large', price: 72, displaySize: 'large' },
  { id: 9, name: 'Sweatshirt', category: 'clothing', color: 'baby blue', size: 'large', price: 72, displaySize: 'medium' },
  { id: 10, name: 'Linen Shirt', category: 'clothing', color: 'white', size: 'medium', price: 42, displaySize: 'small' },
  { id: 11, name: 'Denim Jacket', category: 'clothing', color: 'blue', size: 'x-large', price: 110, displaySize: 'wide' },
  { id: 12, name: 'Leather Strap Watch', category: 'watches', color: 'black', size: 'medium', price: 180, displaySize: 'medium' },
  { id: 13, name: 'Sport Timer Watch', category: 'watches', color: 'yellow', size: 'large', price: 135, displaySize: 'large' },
  { id: 14, name: 'Classic Silver Watch', category: 'watches', color: 'white', size: 'small', price: 220, displaySize: 'small' },
  { id: 15, name: 'Gold Hoop Earrings', category: 'jewelry', color: 'yellow', size: 'small', price: 75, displaySize: 'small' },
  { id: 16, name: 'Emerald Pendant', category: 'jewelry', color: 'green', size: 'medium', price: 145, displaySize: 'medium' },
  { id: 17, name: 'Black Stone Ring', category: 'jewelry', color: 'black', size: 'small', price: 288, displaySize: 'large' },
  { id: 18, name: 'Silk Scarf', category: 'accessories', color: 'red', size: 'medium', price: 32, displaySize: 'medium' },
  { id: 19, name: 'Canvas Belt', category: 'accessories', color: 'blue', size: 'large', price: 28, displaySize: 'small' },
  { id: 20, name: 'Winter Beanie', category: 'accessories', color: 'green', size: 'small', price: 22, displaySize: 'small' },
  { id: 21, name: 'Aviator Sunglasses', category: 'accessories', color: 'black', size: 'medium', price: 150, displaySize: 'large' },
  { id: 22, name: 'Round Sunglasses', category: 'accessories', color: 'yellow', size: 'medium', price: 130, displaySize: 'medium' },
  { id: 23, name: 'Classic T-Shirt', category: 'clothing', color: 'black', size: 'large', price: 25, displaySize: 'small' },
  { id: 24, name: 'Classic T-Shirt', category: 'clothing', color: 'white', size: 'large', price: 25, displaySize: 'small' },
  { id: 25, name: 'Classic T-Shirt', category: 'clothing', color: 'green', size: 'large', price: 28, displaySize: 'small' },
  { id: 26, name: 'Classic T-Shirt', category: 'clothing', color: 'baby blue', size: 'medium', price: 28, displaySize: 'small' },
  { id: 27, name: 'Formal Shirt', category: 'clothing', color: 'white', size: 'medium', price: 55, displaySize: 'medium' },
  { id: 28, name: 'Formal Shirt', category: 'clothing', color: 'blue', size: 'medium', price: 55, displaySize: 'medium' },
  { id: 29, name: 'Yoga Mat', category: 'fitness', color: 'green', size: 'large', price: 34, displaySize: 'wide' },
  { id: 30, name: 'Training Gloves', category: 'fitness', color: 'black', size: 'small', price: 26, displaySize: 'small' },
  { id: 31, name: 'Cricket Bat', category: 'fitness', color: 'brown', size: 'large', price: 92, displaySize: 'large' },
  { id: 32, name: 'Matte Lipstick', category: 'beauty', color: 'red', size: 'small', price: 18, displaySize: 'small' },
  { id: 33, name: 'Face Serum', category: 'beauty', color: 'white', size: 'small', price: 38, displaySize: 'medium' },
  { id: 34, name: 'Sunscreen SPF 50', category: 'beauty', color: 'yellow', size: 'medium', price: 24, displaySize: 'small' },
  { id: 35, name: 'Desk Lamp', category: 'home', color: 'black', size: 'medium', price: 45, displaySize: 'medium' },
  { id: 36, name: 'Wall Clock', category: 'home', color: 'white', size: 'medium', price: 40, displaySize: 'small' },
  { id: 37, name: 'Ceramic Vase', category: 'home', color: 'baby blue', size: 'small', price: 30, displaySize: 'small' },
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

function colorClass(value) {
  return value.replace(/\s+/g, '-');
}

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
  const showColorFilter = category === 'clothing';

  const filteredProducts = categoryProducts
    .filter((product) => !showColorFilter || color === 'all' || product.color === color)
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

  function clearFilters() {
    setSearchParams({
      category,
      color: 'all',
      size: 'all',
      price: 'all',
      sort: 'asc',
    });
  }

  return (
    <main className="products-page">
      <section className="products-header">
        <p className="eyebrow">Products</p>
        <h1>Shop products by category</h1>
        <p>
          Choose from more categories, then open the drawer to refine products
          by size, price, sort order, and clothing colors.
        </p>
      </section>

      <section className="category-strip" aria-label="Product categories">
        {categories.map((item) => (
          <button
            className={category === item ? 'active-category' : ''}
            key={item}
            onClick={() => changeCategory(item)}
          >
            <span>{titleCase(item)}</span>
            <small>{products.filter((product) => product.category === item).length} items</small>
          </button>
        ))}
      </section>

      <div className="products-toolbar">
        <div>
          <h2>{titleCase(category)} Collection</h2>
          <p>{filteredProducts.length} products found</p>
        </div>
        <button className="drawer-trigger" onClick={() => setIsDrawerOpen(true)}>
          Filters
        </button>
      </div>

      <div
        className={`drawer-backdrop ${isDrawerOpen ? 'show' : ''}`}
        onClick={() => setIsDrawerOpen(false)}
      />

      <aside className={`filter-drawer ${isDrawerOpen ? 'open' : ''}`} aria-hidden={!isDrawerOpen}>
        <div className="drawer-header">
          <div>
            <p className="eyebrow">Refine</p>
            <h2>Filters</h2>
          </div>
          <button className="drawer-close" onClick={() => setIsDrawerOpen(false)} aria-label="Close filters">
            x
          </button>
        </div>

        {showColorFilter && (
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
                <span className={`filter-dot ${colorClass(item)}`} />
                {titleCase(item)}
              </button>
            ))}
          </div>
        )}

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

        <div className="drawer-actions">
          <button onClick={clearFilters}>Clear</button>
          <button onClick={() => setIsDrawerOpen(false)}>Show products</button>
        </div>
      </aside>

      <section className="active-filters" aria-label="Active filters">
        <h2>Active Search Params</h2>
        <div className="active-grid">
          <p><span>Category</span>{category}</p>
          <p><span>Color</span>{showColorFilter ? color : 'clothing only'}</p>
          <p><span>Size</span>{size}</p>
          <p><span>Price Filter</span>{price}</p>
          <p><span>Price Sort</span>{sort}</p>
          <p><span>Results</span>{filteredProducts.length}</p>
        </div>
      </section>

      <section className="product-results" aria-label="Filtered products">
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <article
              className={`product-card product-card-${product.displaySize} product-tone-${colorClass(product.color)}`}
              key={product.id}
            >
              <div className={`product-swatch ${colorClass(product.color)}`} />
              <span className="product-tag">{titleCase(product.category)}</span>
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
