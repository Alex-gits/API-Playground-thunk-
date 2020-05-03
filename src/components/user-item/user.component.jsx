import React from 'react';
import { withRouter } from 'react-router-dom';

import './user.styles.scss';

const User = ({ user, history }) => (
  <div className='user-wrapper'>
    <h3>Name: {user.name}</h3>
    <p>Username: {user.username}</p>
    <p>Email: {user.email}</p>
    <p>Email: {user.phone}</p>
    <div className='location'>
      Location:
      <p>{user.address.city}</p>
      <p>{user.address.street}</p>
    </div>
    <button onClick={() => history.push(`/posts/${user.id}`)} >Check {user.username}'s posts</button>
  </div>
);

export default withRouter(User);