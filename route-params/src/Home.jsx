import { Link } from 'react-router-dom';

const featuredFilters = [
  {
    title: 'Red shoes',
    description: 'Medium sneakers and low-price picks.',
    path: '/products?category=shoes&color=red&size=medium&price=low&sort=asc',
    tone: 'red',
  },
  {
    title: 'Black watches',
    description: 'Premium watches sorted high to low.',
    path: '/products?category=watches&color=black&size=large&price=high&sort=desc',
    tone: 'black',
  },
  {
    title: 'Blue bags',
    description: 'Small and medium bags in cooler colors.',
    path: '/products?category=bags&color=blue&size=small&price=medium&sort=asc',
    tone: 'blue',
  },
  {
    title: 'Green accessories',
    description: 'Useful add-ons under a medium budget.',
    path: '/products?category=accessories&color=green&size=small&price=medium&sort=asc',
    tone: 'green',
  },
  {
    title: 'Black clothing',
    description: 'Clothing filtered by dark everyday basics.',
    path: '/products?category=clothing&color=black&size=medium&price=medium&sort=asc',
    tone: 'black',
  },
];

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">React Router Shop</p>
          <h1>Build product pages that remember every filter</h1>
          <p className="hero-text">
            Choose category, color, size, price, and sort order. Each choice is
            stored in the URL, so the same filtered view can be opened again.
          </p>

          <div className="hero-actions">
            <Link className="primary-link" to="/products?category=shoes&color=red&size=medium&price=low&sort=asc">
              Start Shopping
            </Link>
            <Link className="secondary-link" to="/products?category=accessories&color=green&size=small&price=medium&sort=desc">
              View Example
            </Link>
          </div>

          <div className="hero-stats" aria-label="Product filter highlights">
            <p><span>6</span>Categories</p>
            <p><span>8</span>Colors</p>
            <p><span>4</span>Sizes</p>
          </div>
        </div>
      </section>

      <section className="quick-filters" aria-labelledby="quick-filters-title">
        <div>
          <p className="eyebrow">Quick Filters</p>
          <h2 id="quick-filters-title">Open a ready-made product URL</h2>
        </div>

        <div className="filter-grid">
          {featuredFilters.map((filter) => (
            <Link className={`filter-card filter-card-${filter.tone}`} to={filter.path} key={filter.title}>
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
