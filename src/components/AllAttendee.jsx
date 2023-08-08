import React, { useState, useEffect } from 'react';
import { getAllAtfal, getAllAtfalByIds, getAllAttendeeByIds, getAllAttendees, showToast, updateAttendee } from '../services/api';
import { navigate } from 'wouter/use-location';
import { ToastContainer } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';
import { ColorRing } from 'react-loader-spinner';
import axios from 'axios';



const AllAttendee = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [dila, setDila] = useState('');
  const [printbtn,setPrintBtn]= useState('Add to bulk Print')
  const [modal,showModal] = useState(false)
  const [id , setId] = useState('')
  const [type, setType] = useState(''); // Default to 'Handler'
  const [loader , setLoader] = useState(false)
  const [ids, setids]=useState([])
  const [selectedDila, setSelectedDila] = useState('');
  const [count, setCount] = useState(null);
  const [countModal, setCountModal] = useState(false);
  function showCountModalView(){
    setCountModal(true)
  }



  const fetchHandlerCount = async () => {
    try {
      const response = await axios.get(`https://oyo-ivc2023-37ca5d32b76c.herokuapp.com/api/attendees/count/handlers/${selectedDila}`);
      setCount(response.data.count);
    } catch (error) {
      console.error(error);
    }
  };
  function showUpdateModal(id){
    setId(id)
    showModal(true)
  }
  function CheckNull(){
    if(!data){
      toast('ERROR FETCHING DATA!')
    }
  }
  console.log(ids)

  const AddtoPrint=async(e)=>{
    e.preventDefault()
    const d = ids
    if(d.length < 1){
      showToast()
    }
    else{
      const response = await getAllAttendeeByIds(d);
    localStorage.setItem('attendees',JSON.stringify(response))

     navigate('/attendees/cards')
    }
    

  }
  const handleUpdateclose = () => {
    showModal(false);
  };

  // Function to update printBtn state when "Add to Print" button is clicked
  const handleAddToPrint = async(id) => {
  setData((prevData) => {
    const newData =  prevData.map(item => {
      if (item._id === id) {
         return { ...item, printBtn: 'Added' };
      }
      return item;
    });

      setids((prevIds) => [...prevIds, id]);

     toast('Added Successfully Don\'t worry');

    return newData;
  });
};
// update

const update = async ()=>{
  try {
    if(dila&&type&&id){
      const data = {
        attendeeId:id,
        newDila:dila,
        newType:type
      }
      const response = await updateAttendee(data)
      if(response === true){
        toast('Attendee has been updated sucessfully')
        showModal(false)
      }
      // toast('An error occured')
  
    }
  } catch (error) {
    toast(error)
  }



}

  const fetch = async () => {
    setLoader(true)
    const response = await getAllAttendees();
    setData(response);
    setData(response?.map(item => ({ ...item, printBtn: 'Add to Bulk Print' })));
    setLoader(false)
  };

  useEffect(() => {
    fetch();
    CheckNull()
  }, []);

  useEffect(() => {
    // Filter the data based on the search term
    const filtered = data?.filter((item) => item.fullName.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredData(filtered);
  }, [data, searchTerm]);

  // Number of items to display per page
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  function closeModal(){
    setCountModal(false)
  }

  // Function to handle pagination
  const paginate = (array, pageNumber) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    return array?.slice(startIndex, startIndex + itemsPerPage);
  };

  // Get the current page data
  const currentData = paginate(filteredData, currentPage);


  return (
    <>
      <div>
        <ToastContainer/>
        <Toaster/>
        <div className='flex flex-row gap-4'>
          {/* Search input */}
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <p className='bg-blue-500 text-white font-bold p-1 rounded text-center'>selected data to print = {ids.length||0}</p>
          <p onClick={showCountModalView} className='bg-green-500 text-white font-bold p-1 rounded text-center text-sm hover:cursor-pointer'>Get counts of Handlers</p>
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
                  Auxiliary
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Dil'a 
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone number
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
                    {item.fullName}
                  </td>
                  <td className="px-6 py-4">{item.auxiliary}</td>
                  <td className="px-6 py-4">{item.type}</td>
                  <td className="px-6 py-4">{item.dila}</td>
                  <td className="px-6 py-4">{item?.phoneNumber}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={()=>showUpdateModal(item._id)}
                      className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Update
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
        {
        loader&&(
          <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-80'>
            <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>

          </div>
        )
      }

      {modal&&(
        <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="bg-white w-96 p-8 rounded shadow-lg z-10">
          <h2 className="text-xl font-semibold mb-4">Update Attendee Status</h2>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Select Duty :</label>
            <div>

            <select
            id="dil'a"
            value={dila}
            onChange={(e) => setDila(e.target.value)}
            required
            className="w-full px-4 py-2 border border-green-500 rounded-lg focus:outline-none text-black focus:border-green-700"
          >
            <option value="">Select Dil'a</option>
            <option value="Akinyele">AKINYELE</option>
            <option value="Apata">APATA</option>
            <option value='Asipa-Oleyo'>ASHIPA-OLEYO</option>
            <option value='Coca-cola'>COCA-COLA</option>
            <option value='Ikoyi-ile-Ogbomosho'>IKOYILE-OGBOMOSHO</option>
            <option value='Ibadan'>IBADAN</option>
            <option value='Ibarapa'>IBARAPA</option>
            <option value='Monatan'>MONATAN</option>
            <option value='Oluyole-Onaara'>OLUYOLE-ONA-ARA</option>
            <option value='Omi-adio'>OMI-ADIO</option>
            <option value='Oyo'>OYO</option>
            <option value='Oke-ogun'>OKE-OGUN</option>

            {/* Add more options as needed */}
          </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Select dil'a to Update:</label>
            <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="block w-full px-4 py-2 rounded-lg shadow-sm focus:ring focus:ring-green-200 border border-green-500"
          required
        >
          <option value="">Select a Duty type</option>
          <option value="Handler">Handler</option>
          <option value="Guest">Guest</option>
          <option value="Security">Security</option>
          <option value="Kitchen">Kitchen</option>
          <option value="AudioVisual">AudioVisual</option>
          <option value="Ishaat">Ishaat</option>
          <option value="Electricity">Electricity</option>
          <option value="Mobilization">Mobilization</option>
          <option value="State-Officer">State-Officer</option>
          <option value="Mulk-Officer">Mulk-Officer</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Plumbing">Vip-care</option>
          <option value="Tajneed">Tajneed</option>
          <option value="Sports">Sports</option>
          <option value="Wakariamoh">Wakariamoh</option>
        </select>
          </div>
          <div className="flex justify-end">
            <button
              onClick={update}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Update Attendee
            </button>
            <button
              onClick={handleUpdateclose}
              className="ml-4 text-gray-600 py-2 px-4 rounded hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      )}
      {
        countModal&&(
          <div className="fixed inset-0 flex items-center justify-center z-50">
  <div className="fixed inset-0 flex items-center justify-center">
    {/* Semi-transparent background */}
    <div className="absolute inset-0 bg-black opacity-50" />
    <div className="relative z-10 bg-green-200 p-4 rounded-lg shadow-lg w-full max-w-md">
    <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        onClick={closeModal}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      {/* Green-themed modal content */}
      <h2 className="text-lg font-semibold mb-2 text-green-800">Handler Count by Dila</h2>
      <select
        className="border rounded p-2 mb-2"
        value={selectedDila}
        onChange={(e) => setSelectedDila(e.target.value)}
      >
            <option value="">Select Dil'a</option>
            <option value="none">Not Applicable</option>
            <option value="Akinyele">AKINYELE</option>
            <option value="Apata">APATA</option>
            <option value='Asipa-Oleyo'>ASHIPA-OLEYO</option>
            <option value='Coca-cola'>COCA-COLA</option>
            <option value='Ikoyi-ile-Ogbomosho'>IKOYILE-OGBOMOSHO</option>
            <option value='Ibadan'>IBADAN</option>
            <option value='Ibarapa'>IBARAPA</option>
            <option value='Monatan'>MONATAN</option>
            <option value='Oluyole-Onaara'>OLUYOLE-ONA-ARA</option>
            <option value='Omi-adio'>OMI-ADIO</option>
            <option value='Oyo'>OYO</option>
            <option value='Oke-ogun'>OKE-OGUN</option>

        {/* Add other dila options */}
      </select>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={fetchHandlerCount}
        disabled={!selectedDila}
      >
        Get Count
      </button>
      {count !== null && (
        <p className="mt-2 text-green-700">
          Handler count for {selectedDila}: {count}
        </p>
      )}
    </div>
  </div>
</div>

        )

      }
      </div>
    </>
  );
};

export default AllAttendee;
