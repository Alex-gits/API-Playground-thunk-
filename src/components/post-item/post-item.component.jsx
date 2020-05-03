import React from 'react';

import './post-item.styles.scss';

const PostItem = ({ post }) => (
  <div className='post-item'>
    <h3 className='post-title'>{post.title}</h3>
    <p>{post.body}</p>
  </div>
);

export default PostItem;