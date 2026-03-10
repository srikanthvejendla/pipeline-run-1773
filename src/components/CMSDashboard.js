import React from 'react';

const CMSDashboard = ({ posts, onDelete }) => {
  return (
    <div className="cms-dashboard">
      <h1>Dashboard</h1>
      <h2>Your Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <span>{post.title}</span>
            <button onClick={() => onDelete(post.id)}>Delete</button>
            <button>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CMSDashboard;