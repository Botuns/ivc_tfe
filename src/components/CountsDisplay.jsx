// components/CountsDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const CountsDisplay = () => {
  const [counts, setCounts] = useState({});
  const [countsN, setCountsN] = useState({});

  const [selectedDila, setSelectedDila] = useState('');

  const fetchCounts = async (dila) => {
    try {
      const route = `http://localhost:4000/api/atfal/counts/${dila}`;
      const response = await axios.get(route);
      setCounts(response.data);
    } catch (error) {
      toast.error('Failed to fetch data.');
    }
  };

  const fetchNCounts = async (dila) => {
    try {
      const route = `http://localhost:4000/api/atfal/payments`;
      const response = await axios.get(route);
      setCountsN(response.data);
    } catch (error) {
      toast.error('Failed to fetch data.');
    }
  };

  useEffect(() => {
    fetchNCounts();
  }, []);

  const handleSelectDila = (event) => {
    const selectedDila = event.target.value;
    setSelectedDila(selectedDila);
    fetchCounts(selectedDila);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Payment Counts</h1>
      <div className='flex justify-between flex-row gap-8'>
      <select
        className="w-full p-2 border rounded-md mb-4"
        value={selectedDila}
        onChange={handleSelectDila}
      >
        <option value="">Select Dila</option>
        {/* Add your options here */}
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

      </select>
<button className=' mb-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md' onClick={()=>fetchCounts()}>Get counts</button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-400 p-4 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-2">Count of Paid Atfal per Dil'a</h2>
          <p className="text-lg bg-blue-500 rounded-full p-1 w-8 text-center">{counts.countOfPaidAtfal ||0}</p>
        </div>
        <div className="bg-green-400 p-4 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-2">Count of Unpaid Atfal per Dil'a</h2>
          <p className="text-lg bg-blue-500 rounded-full p-1 w-8 text-center">{counts.countOfUnpaidAtfal|| 0}</p>
        </div>
        <div className="bg-green-400 p-4 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-2">Count of Unfinished Atfal per Dil'a</h2>
          <p className="text-lg bg-blue-500 rounded-full p-1 w-8 text-center">{counts.countOfUnfinishedAtfal ||0}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="bg-green-400 p-4 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-2">Count of Paid Atfal</h2>
          <p className="text-lg bg-blue-500 rounded-full p-1 w-8 text-center">{countsN.countOfPaidAtfal}</p>
        </div>
        <div className="bg-green-400 p-4 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-2">Count of Unpaid Atfal</h2>
          <p className="text-lg bg-blue-500 rounded-full p-1 w-8 text-center">{countsN.countOfUnpaidAtfal}</p>
        </div>
        <div className="bg-green-400 p-4 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-2">Count of Unfinished Atfal</h2>
          <p className="text-lg bg-blue-500 rounded-full p-1 w-8 text-center">{countsN.countOfUnfinishedAtfal}</p>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default CountsDisplay;
