import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './users.styles.scss';

import Spinner from '../../components/spinner/spinner.component';
import User from '../../components/user-item/user.component';
import { fetchUsersAsync } from '../../redux/users/users.actions';
import { selectUsersCollection, selectUserFetchingStatus } from '../../redux/users/users.selectors';

const Users = ({ users, fetchUsersAsync, isFetching }) => {
  useEffect(() => { 
    fetchUsersAsync();
  }, [fetchUsersAsync]);

  return (
    <div className='users-container'>
      <h2>Users</h2>
      <div className='users-card-wrapper'>
        {
          isFetching ? <Spinner /> : users.map(user => <User key={user.id} user={user} />)
        }
      </div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  fetchUsersAsync: () => dispatch(fetchUsersAsync())
});

const mapStateToProps = createStructuredSelector({
  users: selectUsersCollection,
  isFetching: selectUserFetchingStatus
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);