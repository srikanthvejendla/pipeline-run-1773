import React from 'react';

const PostView = ({ post }) => {
  return (
    <div className="post-view">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <div className="comments">
        <h3>Comments</h3>
        {/* Comments would be rendered here */}
      </div>
    </div>
  );
};

export default PostView;