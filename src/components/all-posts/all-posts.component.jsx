import React from 'react';
import { connect } from 'react-redux';

import './all-posts.styles.scss';

import PostItem from '../post-item/post-item.component';
import Spinner from '../spinner/spinner.component';

import { selectUserPosts } from '../../redux/posts/posts.selector';

const AllPosts = ({ userPosts, posts, loading, match }) => {
  const userId = match.params.userId;
  const postsToShow = userId ? userPosts : posts;

  return (
    <div>
      <h2>{ userId ? 'User posts' : 'All posts' }</h2>
      <div className='posts-wrapper'>
        {
          loading ? <Spinner /> : postsToShow.map(post => <PostItem key={post.id} post={post} />)
        }
      </div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts.postsCollection,
  loading: state.posts.isLoading,
  userPosts: selectUserPosts(ownProps.match.params.userId)(state)
})

export default connect(mapStateToProps)(AllPosts);