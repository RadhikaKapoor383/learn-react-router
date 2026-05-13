function About() {
  return (
    <main className="page-shell">
      <section className="info-hero">
        <p className="eyebrow">About</p>
        <h1>Built to practice route state in a simple shop UI</h1>
        <p>
          This project demonstrates how React Router can read and update search
          parameters so filters stay visible in the browser URL.
        </p>
      </section>

      <section className="info-grid">
        <article className="info-card">
          <h2>Clean URLs</h2>
          <p>
            Filters like category, color, price, and sort order are stored as
            query strings, so product views are easy to share.
          </p>
        </article>

        <article className="info-card">
          <h2>Reusable Routes</h2>
          <p>
            The same Products route can show many combinations without creating
            a separate page for every filter choice.
          </p>
        </article>

        <article className="info-card">
          <h2>Beginner Friendly</h2>
          <p>
            The code stays small and readable while still looking like a real
            application screen.
          </p>
        </article>
      </section>
    </main>
  );
}

export default About;
