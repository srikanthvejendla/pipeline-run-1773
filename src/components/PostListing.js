import React from 'react';
import { Link } from 'react-router-dom';

const PostListing = ({ posts }) => {
  return (
    <div className="post-listing">
      <h2>All Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostListing;