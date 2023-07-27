import React, { useState, useEffect } from 'react';
import { getAllAtfal, getAllAtfalByIds } from '../services/api';
import { navigate } from 'wouter/use-location';
import { ToastContainer,toast } from 'react-toastify';


const AllAtfal = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [printbtn,setPrintBtn]= useState('Add to bulk Print')
  const [ids, setids]=useState([])

  console.log(ids)

  const AddtoPrint=async(e)=>{
    e.preventDefault()
    const d = ids
    if(d.length < 1){
      toast.error('You have not selected any data')
    }
    else{
      const response = await getAllAtfalByIds(d);
    localStorage.setItem('atfals',JSON.stringify(response))

     navigate('/atfal/cards')
    }
    

  }


  // Function to update printBtn state when "Add to Print" button is clicked
  const handleAddToPrint = (index) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[index].printBtn = 'Added';
      setids((prevIds) => [...prevIds, newData[index]._id]);
      return newData;
    });
  };

  const fetch = async () => {
    const response = await getAllAtfal();
    setData(response);
    setData(response.map(item => ({ ...item, printBtn: 'Add to Bulk Print' })));
  };

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    // Filter the data based on the search term
    const filtered = data.filter((item) => item._fullName.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredData(filtered);
  }, [data, searchTerm]);

  // Number of items to display per page
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  // Function to handle pagination
  const paginate = (array, pageNumber) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    return array.slice(startIndex, startIndex + itemsPerPage);
  };

  // Get the current page data
  const currentData = paginate(filteredData, currentPage);


  return (
    <>
      <div>
        <ToastContainer/>
        <div>
          {/* Search input */}
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <p onClick={AddtoPrint} className="px-1 w-24 text-center mb-4 text-sm ml-[25cm] h-[1cm] bg-red-500 rounded hover:cursor-pointer">
        Print Selected
        </p>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-green-500 dark:text-gray-400">
            <thead className="text-xs text-black uppercase bg-green-500 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Full Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Age
                </th>
                <th scope="col" className="px-6 py-3">
                  Dila
                </th>
                <th scope="col" className="px-6 py-3">
                  Tag Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Created At
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item,index) => (
                <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item._fullName}
                  </td>
                  <td className="px-6 py-4">{item._age}</td>
                  <td className="px-6 py-4">{item._dila}</td>
                  <td className="px-6 py-4">{item._tagNumber}</td>
                  <td className="px-6 py-4">{item.createdAt}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => {
                        // Handle view details action here
                      }}
                      className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleAddToPrint(index)}
                      className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                      {item.printBtn}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="bg-gray-300 text-gray-700 px-3 py-1 rounded-l"
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredData.length / itemsPerPage)))
            }
            className="bg-gray-300 text-gray-700 px-3 py-1 rounded-r ml-4"
          >
            Next
          </button>
          <p className="ml-4 font-extrabold bg-green-500 p-1 rounded">Page {currentPage}</p>
        </div>
      </div>
    </>
  );
};

export default AllAtfal;
