import React from 'react';
import * as XLSX from 'xlsx'; // Use 'xlsx' library to handle CSV conversion
import { saveAs } from 'file-saver'; // Use 'file-saver' library to handle file download
import toast, { Toaster } from 'react-hot-toast';
import { doesExistInStorage, getAllAtfal } from '../services/api';
import { useState } from 'react';
import { useEffect } from 'react';
import { navigate } from 'wouter/use-location';

const ExportPage = () => {
  const[data,setData]= useState([])
  const checkAuth=()=>{
    const res = doesExistInStorage('auth')
    if (res ===false){
      navigate('/')
    }
    console.log('okay')
  }
  function CheckNull(){
    if(!data){
      toast('ERROR FETCHING DATA!')
    }
  }
  const fetch = async () => {
    const response = await getAllAtfal();
    setData(response);
    // setData(response?.map(item => ({ ...item, printBtn: 'Add to Bulk Print' })));
  };

  useEffect(() => {
    fetch();
    CheckNull()
    checkAuth()

  }, []);
  const exportToCSV =async () => {
    await toast('getting it done!');
    try {
      if (data.length === 0) {
        toast('No data to export!');
        return;
      }

      const fileName = 'atfalivc_2023_data_export.csv';
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      await XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
      const csvData = XLSX.write(workbook, { bookType: 'csv', type: 'array' });
      const blob = new Blob([csvData], { type: 'text/csv' });
      await saveAs(blob, fileName);
      await toast('Voila, its downloading');
    } catch (error) {
      toast('An error occurred');
    }
  };

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center'  }} className='flex flex-col '>
        <Toaster/>
        <div>
            
<a  class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div className='flex flex-row justify-between gap-2'>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-green-600">ATFAL REGIONAL IVC OYO 2023</h5>
    <span><i class="fa-solid fa-file-excel text-4xl text-green-500"></i></span>
    </div>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here is the section to export the data to a spreadsheet format.</p>
</a>

        </div>
        <div>
        <p className='mt-6 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md'>
            You are to export the data of all registered atfal to spreadsheet format, click to do so
        </p>
        </div>
      <button className='mt-6 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md' onClick={exportToCSV}>Export to CSV</button>
    </div>
  );
};

export default ExportPage;
