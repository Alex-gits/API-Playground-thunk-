import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { fetchPostsAsync } from '../../redux/posts/posts.actions';
import AllPosts from '../../components/all-posts/all-posts.component';

const Posts = ({ fetchPostsAsync, match }) => {
  useEffect(() => {
    fetchPostsAsync()
  }, [fetchPostsAsync])

  return (
    <div>
      <Route exact path={`${match.path}`} component={AllPosts} />
      <Route path={`${match.path}/:userId`} component={AllPosts} />
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  fetchPostsAsync: () => dispatch(fetchPostsAsync())
})

export default connect(null, mapDispatchToProps)(Posts) ;