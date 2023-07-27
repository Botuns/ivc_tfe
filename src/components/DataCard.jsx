import React from 'react';

const DataCard = ({ figure, name }) => {
  return (
    <div className="bg-green-500 text-white h-[4cm] w-[7cm] p-6 rounded-lg shadow-lg mt-4 ml-10">
      <div className="flex items-center justify-center mb-4">
        <span className='mr-4'>
        <i class="fa-solid fa-database text-4xl"></i>

        </span>
        <div className="text-6xl font-semibold text-black">{figure||0}</div>
      </div>
      <div className="text-xl text-black bg-white shadow-md p-1 rounded text-center">{name||"Name"}</div>
    </div>
  );
};

export default DataCard;
