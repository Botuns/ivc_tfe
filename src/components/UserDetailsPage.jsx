import React from 'react';
import UserCard from './utils/UserCard';

const UserDetailsPage = () => {
  // Sample user data (replace this with your actual data from local storage)
  const user = JSON.parse(localStorage.getItem('atfal'))
  console.log(user)

  const handleCancel = () => {
    // Implement the logic to navigate to a previous page here
    console.log('Cancelled');
    window.alert('cancelled')
  };

  return <UserCard user={user} onCancel={handleCancel} />;
};

export default UserDetailsPage;
