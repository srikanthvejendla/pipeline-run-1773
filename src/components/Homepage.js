import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage">
      <header>
        <h1>Blog Platform</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
      <main>
        <h2>Latest Posts</h2>
        <ul>
          {/* Sample Posts */}
          <li>
            <Link to="/post/1">Post Title 1</Link>
            <p>Snippet of the post content...</p>
          </li>
          <li>
            <Link to="/post/2">Post Title 2</Link>
            <p>Snippet of the post content...</p>
          </li>
        </ul>
      </main>
      <footer>
        <p>&copy; 2023 Blog Platform</p>
      </footer>
    </div>
  );
};

export default Homepage;