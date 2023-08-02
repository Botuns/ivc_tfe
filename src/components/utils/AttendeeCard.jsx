import React from 'react';
import { navigate } from 'wouter/use-location';
import { _capitalizeName } from '../../services/utils';

const back=()=>{
navigate('/see-all-attendee')
  
}
const triangleStyle = {
  borderLeft: "30px solid transparent",
  borderRight: "30px solid transparent",
  borderBottom: "60px solid darkgreen", // Change this to the desired color
};


const UserCard = ({ user }) => {
  return (
    <div className="p-1 w-[6cm]">
  <div className="w-full p-4 bg-green-500 rounded-lg shadow-md border-x-4 border-y-4 border-solid border-green-800">
    <div className="flex justify-between">
      <h2 className="text-white text-sm font-extrabold mb-4">ATFAL REGIONAL IVC OYO 2023</h2>
      <img
        className="w-8 h-8 mr-2 rounded-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqNuiuXCWRy76qvGIL6hFPRFwmUhcc_a7WQldY2NxoeB_QUYgeEb3xVWItmBAMp8kXWw&usqp=CAU"
        alt="logo"
      />
    </div>
    <hr className="font-[900]" />
    <div className="grid grid-cols-2 gap-4">
      <div>
        <p className="text-white text-sm font-medium">Full Name:</p>
        <p className="text-white text-sm font-semibold">{_capitalizeName(user.fullName)}</p>

        <p className="text-white text-sm font-medium mt-4">Auxiliary:</p>
        <p className="text-white text-lg font-semibold">{user.auxiliary}</p>
      </div>

      <div>
        <p className="text-white text-sm font-medium">Type:</p>
        <p className="text-white text-sm font-semibold">{user.type}</p>

        <p className="text-white text-sm font-medium mt-4">Tag Number:</p>
        <p className="text-white text-sm font-semibold">{user.tagNumber}</p>
      </div>
    </div>

    <div className="mt-6">
      <p className="text-white text-sm font-medium">Phone Number At:</p>
      <p className="text-white text-sm font-semibold">{user?.phoneNumber || "confidential"}</p>

      <p className="text-white text-sm font-medium">Created At:</p>
      <p className="text-white text-sm font-semibold">{user.createdAt}</p>
    </div>
  </div>
</div>

  );
};

const generatePDF = () => {
  
  window.print()
};

const AttendeeCard = ({ users }) => {
  const rows = Math.ceil(users.length/3);

  return (
     
      
     <div className="flex flex-col items-center justify-center w-full  bg-green-200 p-4">
      <div className="pdf-page">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex flex-row">
            {users.slice(rowIndex * 3, rowIndex * 3 + 3).map((user, index) => (
              <div key={index} className="pdf-section">
                <UserCard user={user} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-between gap-4">
        <button
          className="mt-6 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md"
          onClick={() => generatePDF()}
        >
          Print to PDF
        </button>
        <button
          className="mt-6 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md"
          // onClick={back()}
          onClick={()=>back()}
        >
          Go back
        </button>
        {/* ... Other buttons or actions ... */}
      </div>
    </div>
       
       );
};

export default AttendeeCard;
