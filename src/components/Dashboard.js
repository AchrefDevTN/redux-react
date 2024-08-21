import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/actions/userActions';
import { selectUserData, selectUserLoading, selectUserError } from '../redux/selectors/userSelectors';
import { selectIsAuthenticated } from '../redux/selectors/authSelectors';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);
  const loading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUser(1)); // Assuming user ID is 1 for demo purposes
    }
  }, [dispatch, isAuthenticated]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default Dashboard;
