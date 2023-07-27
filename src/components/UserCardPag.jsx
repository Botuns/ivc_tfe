import React from 'react';
import UserCardGrid from './utils/UserCardGrid';

const UserCardPag = () => {
  // Sample user data (replace this with your actual data from local storage)
  const user = JSON.parse(localStorage.getItem('atfals'))
  console.log(user)

  const handleCancel = () => {
    // Implement the logic to navigate to a previous page here
    console.log('Cancelled');
    window.alert('cancelled')
  };

  return <UserCardGrid users={user} onCancel={handleCancel} />;
};

export default UserCardPag;
