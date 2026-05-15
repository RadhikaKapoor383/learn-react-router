import { Link } from 'react-router-dom';

const featuredFilters = [
  {
    title: 'Red shoes',
    description: 'Open products with category and color already set.',
    path: '/products?category=shoes&color=red&size=medium&price=low&sort=asc',
  },
  {
    title: 'Black watches',
    description: 'Try a darker style with high price sorting.',
    path: '/products?category=watches&color=black&size=large&price=high&sort=desc',
  },
  {
    title: 'Blue bags',
    description: 'Jump straight into bags using search params.',
    path: '/products?category=bags&color=blue&size=small&price=medium&sort=asc',
  },
  {
    title: 'Green accessories',
    description: 'Explore a variety of green accessories.',
    path: '/products?category=accessories&color=green&size=small&price=medium&sort=asc',
  },
  {
    title: 'Black clothing',
    description: 'Discover the latest in black fashion.',
    path: '/products?category=clothing&color=black&size=medium&price=medium&sort=asc',
  },
];

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">React Router Practice</p>
          <h1>Explore products with search params</h1>
          <p className="hero-text">
            This demo shows how query strings can save filters like category,
            color, size, price, and sort order directly in the URL.
          </p>

          <div className="hero-actions">
            <Link className="primary-link" to="/products?category=shoes&color=red&size=medium&price=low&sort=asc">
              Start Shopping
            </Link>
            <Link className="secondary-link" to="/products?category=accessories&color=green&size=small&price=medium&sort=desc">
              View Example
            </Link>
          </div>
        </div>

        <div className="hero-panel" aria-label="Current search parameter example">
          <span>category=shoes</span>
          <span>color=red</span>
          <span>size=medium</span>
          <span>price=low</span>
        </div>
      </section>

      <section className="quick-filters" aria-labelledby="quick-filters-title">
        <div>
          <p className="eyebrow">Quick Filters</p>
          <h2 id="quick-filters-title">Open a ready-made product URL</h2>
        </div>

        <div className="filter-grid">
          {featuredFilters.map((filter) => (
            <Link className="filter-card" to={filter.path} key={filter.title}>
              <h3>{filter.title}</h3>
              <p>{filter.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
