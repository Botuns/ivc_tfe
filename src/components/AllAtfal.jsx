import React, { useState, useEffect } from 'react';
import { getAllAtfal, getAllAtfalByIds, showToast } from '../services/api';
import { navigate } from 'wouter/use-location';
import { ToastContainer } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';
import '../styles/allatfal.mobile.css'

const AllAtfal = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [printbtn, setPrintBtn] = useState('Add to bulk Print');
  const [ids, setIds] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('');

  function CheckNull() {
    if (!data) {
      toast('ERROR FETCHING DATA!');
    }
  }

  const AddtoPrint = async (e) => {
    e.preventDefault();
    const d = ids;
    if (d.length < 1) {
      showToast();
    } else {
      const response = await getAllAtfalByIds(d);
      localStorage.setItem('atfals', JSON.stringify(response));
      navigate('/atfal/cards');
    }
  };
  const checkExists = (id)=>{
    try {
      return ids.includes(id);
    } catch (error) {
      toast(error)
    }

  }

  // Function to update printBtn state when "Add to Print" button is clicked
  const handleAddToPrint = async (id) => {
    try {
      const check = checkExists(id)
      if(check === false){
        setData((prevData) => {
          const newData = prevData.map((item) => {
            if (item._id === id) {
              return { ...item, printBtn: 'Added' };
            }
            return item;
          });
    
          setIds((prevIds) => [...prevIds, id]);
    
          toast('Added Successfully Don\'t worry');
    
          return newData;
        });
      }
      else{
        toast('Duplicate ids detected')
      }

    } catch (error) {
      toast(error)
      
    }
  };
  const clearStatusFilter = () => {
    setSelectedStatus('');
  };
  const fetch = async () => {
    const response = await getAllAtfal();
    setData(response);
    setData(response?.map((item) => ({ ...item, printBtn: 'Add to Bulk Print' })));
  };

  useEffect(() => {
    fetch();
    CheckNull();
  }, []);

  useEffect(() => {
    // Filter the data based on the search term and selected status
    const filtered = data?.filter((item) => {
      const fullNameMatch = item._fullName.toLowerCase().includes(searchTerm.toLowerCase());
      const statusMatch = selectedStatus === '' || item.status === selectedStatus;
      return fullNameMatch && statusMatch;
    });
    setFilteredData(filtered);
  }, [data, searchTerm, selectedStatus]);

  // Number of items to display per page
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Function to handle pagination
  const paginate = (array, pageNumber) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    return array?.slice(startIndex, startIndex + itemsPerPage);
  };

  // Get the current page data
  const currentData = paginate(filteredData, currentPage);

  // ... Existing return statement
  return (
    <>
      <div>
        <ToastContainer />
        <Toaster />
        <div className='flex flex-row gap-4'>
          {/* Search input */}
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <p className='bg-blue-500 text-white font-bold p-1 rounded text-center'>
            selected data to print = {ids.length || 0}
          </p>
        </div>

        {/* Status Filter Buttons */}
        <div className="flex flex-row gap-4 mt-4">
          <button
            className={`px-2 py-1 rounded ${
              selectedStatus === 'paid' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => setSelectedStatus('paid')}
          >
            Paid
          </button>
          <button
            className={`px-2 py-1 rounded ${
              selectedStatus === 'unpaid' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => setSelectedStatus('unpaid')}
          >
            Unpaid
          </button>
          <button
            className={`px-2 py-1 rounded ${
              selectedStatus === 'unfinished' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => setSelectedStatus('unfinished')}
          >
            Unfinished
          </button>
          <button
            className="px-2 py-1 rounded bg-gray-300 text-gray-700"
            onClick={clearStatusFilter}
          >
            Clear Filter
          </button>
        </div>

        <p onClick={AddtoPrint} className="px-1 w-24 text-center mb-4 text-sm ml-[25cm] h-[1cm] bg-red-500 rounded hover:cursor-pointer dis">
          Print Selected
        </p>
         <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-green-500 dark:text-gray-400">
            <thead className="text-xs text-black uppercase bg-green-500 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Full Name
                </th>
                <th scope="col" className="px-2 py-3">
                  Age
                </th>
                <th scope="col" className="px-6 py-3">
                  Dila
                </th>
                <th scope="col" className="px-6 py-3">
                  Tag Number
                </th>
                <th scope="col" className="px-3 py-3">
                  Amount Paid
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentData?.map((item,index) => (
                <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item._fullName}
                  </td>
                  <td className="px-2 py-4">{item._age}</td>
                  <td className="px-6 py-4">{item._dila}</td>
                  <td className="px-6 py-4">{item._tagNumber}</td>
                  <td className="px-3 py-4">{item.amountPaid}</td>
                  <td className="px-6 py-4 "><div className='bg-green-500 text-white font-extrabold p-1 rounded-md text-center'>{item.status}</div></td>
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
                      onClick={() => handleAddToPrint(item._id)}
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
