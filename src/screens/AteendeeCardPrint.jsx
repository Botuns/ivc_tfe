import React from 'react';
import AttendeeCard from '../components/utils/AttendeeCard';

const AteendeeCardPrint = () => {
  // Sample user data (replace this with your actual data from local storage)
  const user = JSON.parse(localStorage.getItem('attendees'))
  console.log(user)

  const handleCancel = () => {
    // Implement the logic to navigate to a previous page here
    console.log('Cancelled');
    window.alert('cancelled')
  };

  return <AttendeeCard users={user} onCancel={handleCancel} />;
};

export default AteendeeCardPrint;
