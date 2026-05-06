# Learn React Router

---

A practical learning repository for understanding React Router in a React + Vite application. This project demonstrates client-side routing, nested routes, shared layouts, dynamic URL parameters, navigation links, and 404 handling.

## Project Structure

---

```text
learn-react-router/
|-- my-first-app/                 # React Router practice application
|   |-- index.html                # Vite HTML entry point
|   |-- package.json              # Dependencies and npm scripts
|   |-- vite.config.js            # Vite configuration
|   |-- eslint.config.js          # ESLint configuration
|   |-- src/
|   |   |-- main.jsx              # React app entry point
|   |   |-- App.jsx               # Main router configuration
|   |   |-- components/
|   |   |   |-- Navbar.jsx        # Navigation links using React Router Link
|   |   |   `-- Navbar.css        # Navbar styling
|   |   `-- pages/
|   |       |-- Layout.jsx        # Shared layout with Navbar and Outlet
|   |       |-- Home.jsx          # Home route page
|   |       |-- About.jsx         # About route page
|   |       |-- Contact.jsx       # Contact route page with sample form
|   |       |-- Profile.jsx       # Dynamic route using username parameter
|   |       `-- NotFound.jsx      # Wildcard 404 page
|   `-- node_modules/             # Installed packages
`-- README.md                     # This file
```

## Getting Started

---

### Installation

1. Install Node.js and npm from [nodejs.org](https://nodejs.org/)
2. Navigate to the app directory:

   ```bash
   cd learn-react-router/my-first-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in the terminal, usually:

   ```text
   http://localhost:5173
   ```

## Learning Modules

---

### 1. Router Setup

The main routing logic is configured in `src/App.jsx`.

- **BrowserRouter** provides routing support for the whole app.
- **Routes** groups all route definitions.
- **Route** maps URL paths to React components.

### 2. Nested Layout Route

The app uses a shared layout route:

- `Layout.jsx` renders the `Navbar`.
- `Outlet` decides where the active child page appears.
- Home, About, Contact, and Profile pages all share the same layout.

### 3. Navigation Links

The navbar is built in `src/components/Navbar.jsx`.

- Uses `Link` from `react-router-dom`.
- Moves between pages without a full browser reload.
- Includes links for Home, Contact, About, and Profile.

### 4. Dynamic Routing

The profile route uses a dynamic URL parameter:

```text
/profile/:username
```

Examples:

```text
/profile/johndoe
/profile/alice
/profile/bob
```

Inside `Profile.jsx`, `useParams()` reads the `username` value from the URL.

### 5. 404 Route

The wildcard route handles unknown paths:

```jsx
<Route path="*" element={<NotFound />} />
```

This displays `NotFound.jsx` whenever the user visits a route that does not exist.

## Available Scripts

---

From the `my-first-app/` directory:

```bash
npm run dev       # Start the Vite development server
npm run build     # Create a production build
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint checks
```

## Key Topics Covered

---

- **Single Page Applications**: Routing without full page reloads
- **BrowserRouter**: Browser-based routing context
- **Routes and Route**: Declarative route configuration
- **Nested Routes**: Parent layout with child pages
- **Outlet**: Rendering child routes inside a layout
- **Link**: Client-side navigation between pages
- **Dynamic Parameters**: Reading URL values with `useParams`
- **Wildcard Routes**: Handling undefined pages with a 404 route
- **Vite**: Fast React development environment
- **Component Organization**: Separating pages and reusable components

## How to Use

---

1. **Start with the route configuration**
   - Open `src/App.jsx`
   - Study how parent, child, index, dynamic, and wildcard routes are defined

2. **Understand the shared layout**
   - Open `src/pages/Layout.jsx`
   - Notice how `Navbar` stays visible while `Outlet` changes the page content

3. **Practice navigation**
   - Open `src/components/Navbar.jsx`
   - Add new `Link` components and connect them to new routes

4. **Experiment with dynamic URLs**
   - Visit `/profile/alice` or `/profile/bob`
   - Check how `Profile.jsx` displays the username from the URL

5. **Test invalid routes**
   - Visit any unknown path like `/random-page`
   - Confirm that the 404 page appears

## Dependencies

---

- **react** - Library for building user interfaces
- **react-dom** - React rendering package for the browser
- **react-router-dom** - Routing library for React web applications
- **vite** - Development server and build tool
- **eslint** - Code quality and linting tool

## Tips & Best Practices

- Keep route definitions easy to scan in `App.jsx`.
- Use `Layout` routes when multiple pages share the same navbar, footer, or page shell.
- Use `Link` instead of regular `<a>` tags for internal navigation.
- Use dynamic routes for pages that follow the same structure but display different data.
- Keep page components inside `src/pages/` and reusable UI inside `src/components/`.
- Always add a wildcard route so users get a helpful 404 page.

## Next Steps

- Add a new route such as `/services` or `/dashboard`.
- Replace `Link` with `NavLink` to style the active page.
- Add nested routes inside the Profile page.
- Load profile data based on the `username` parameter.
- Add route-based forms, loaders, or protected routes.
- Improve styling with a shared CSS file or component library.

## License

Educational repository for learning purposes.

---

## Author

**Radhika Kapoor** — [GitHub](https://github.com/RadhikaKapoor383)