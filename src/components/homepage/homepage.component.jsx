import React from 'react';

import './homepage.styles.scss';

const HomePage = ({ history }) => (
  <div className='container'>
    <div className='container-wrapper'>
      <div className='message-box'>
        <h2>Check Users</h2>
        <button onClick={() => history.push('/users')} className='link-btn'>Go!</button>
      </div>
      <div className='message-box'>
        <h2>Check Posts</h2>
        <button onClick={() => history.push('/posts')} className='link-btn'>Go!</button>
      </div>
    </div>
  </div>
);

export default HomePage;