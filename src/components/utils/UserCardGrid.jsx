import React from 'react';
import { navigate } from 'wouter/use-location';
import { _capitalizeName, _convertStage } from '../../services/utils';

const back=()=>{
navigate('/see-all-atfal')
  
}

const UserCard = ({ user }) => {
  return (
    <div className="p-1 w-[6cm]">
  <div className="w-full p-4 bg-green-500 rounded-lg shadow-lg">
    <div className="flex justify-between items-center">
      <h2 className="text-sm font-extrabold mb-4 text-white">ATFAL REGIONAL IVC OYO 2023</h2>
      <img
        className="w-8 h-8 mr-2 rounded-full border-2 border-white"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqNuiuXCWRy76qvGIL6hFPRFwmUhcc_a7WQldY2NxoeB_QUYgeEb3xVWItmBAMp8kXWw&usqp=CAU"
        alt="logo"
      />
    </div>
    <hr className="border-t-2 border-white font-[900]" />
    <div className="grid grid-cols-2 gap-4 text-white">
      <div>
        <p className="text-sm font-bold">Full Name:</p>
        <p className="text-sm font-semibold">{_capitalizeName(user._fullName)}</p>

        <p className="text-sm font-bold">Age:</p>
        <p className="text-lg font-semibold">{user._age}</p>

        <p className="text-sm font-bold">Muqami:</p>
        <p className="text-sm font-semibold">{user._muqami}</p>
      </div>

      <div>
        <p className="text-sm font-bold">Stage:</p>
        <p className="text-sm font-semibold">{_convertStage(user._stage)}</p>

        <p className="text-sm font-bold">Tag Number:</p>
        <p className="text-sm font-semibold">{user._tagNumber}</p>

        <p className="text-sm font-bold">Dila:</p>
        <p className="text-sm font-semibold">{user._dila}</p>
      </div>
    </div>

    <div className="mt-6 border-t-2">
      <p className="text-sm font-bold text-white">Created At:</p>
      <p className="text-sm font-semibold">{user.createdAt}</p>
    </div>
  </div>
</div>

  );
};

const generatePDF = () => {
  
  window.print()
};

const UserCardGrid = ({ users }) => {
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

export default UserCardGrid;
