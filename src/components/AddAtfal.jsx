import React, { useState } from 'react';
import { RegisterAtfal } from '../services/api';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'wouter';
import { useLocationProperty, navigate } from "wouter/use-location";
const AddAtfal = () => {
  // const navigate= useLocation()
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [dila, setDila] = useState('');
  const [muqami, setMuqami] = useState('');
  const [stage, setStage] = useState('');
  const [showSuccessModal, setSuccessModal]= useState(false)
  const [tagNumber, setTagNumber]= useState('')

  const closeModal=(e)=>{
    e.preventDefault()
    setSuccessModal(false)
  }

  const handleSubmit =async (e) => {
    e.preventDefault();
    const data = {
      fullName,age,muqami,dila,stage
    }

    const response = await RegisterAtfal(data)
    localStorage.setItem('atfal',JSON.stringify(response?.newAtfal))
    setTagNumber(response?.newAtfal._tagNumber)
    setSuccessModal(true)


  };

  const handlePrint=(e)=>{
    e.preventDefault()
    navigate('/print-details')


  }

  return (
    <div className="bg-white  text-black p-10 ml-[3cm] rounded-lg  border  w-[80%] border-green-500">
      <ToastContainer
    autoClose={5000}
    hideProgressBar={true}
/>
      <h2 className="text-2xl font-semibold ml-[40%] mb-4 bg-green-500 p-[1px] rounded text-center w-[4cm] items-center align-middle">Add New Tifl</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="fullname" className="block mb-1">
            Full Name:
          </label>
          <input
            type="text"
            id="fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 border border-green-500 rounded-lg focus:outline-none focus:border-green-700"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block mb-1">
            Age:
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-4 py-2 border border-green-500 rounded-lg focus:outline-none focus:border-green-700"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="dil'a" className="block mb-1">
            Dil'a:
          </label>
          <select
            id="dil'a"
            value={dila}
            onChange={(e) => setDila(e.target.value)}
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

        <div className="mb-4">
          <label htmlFor="muqami" className="block mb-1">
            Muqami:
          </label>
          <input
            id="muqami"
            type='text'
            value={muqami}
            onChange={(e) => setMuqami(e.target.value)}
            className="w-full px-4 py-2 border border-green-500 rounded-lg focus:outline-none text-black focus:border-green-700"
          >            
            {/* Add more options as needed */}
          </input>
        </div>

        <div className="mb-4">
          <label htmlFor="muqami" className="block mb-1">
            Stage:
          </label>
          <select
            id="muqami"
            value={stage}
            onChange={(e) => setStage(e.target.value)}
            className="w-full px-4 py-2 border border-green-500 rounded-lg focus:outline-none text-black focus:border-green-700"
          >
            <option value="">Select Stage</option>
            <option value='vip'>Vip</option>
            <option value='stage_one'>Stage-One</option>
            <option value='stage_two'>Stage-Two</option>
            <option value='stage_three'>Stage-Three</option>
            
            {/* Add more options as needed */}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-700 text-white py-2 px-4 rounded-lg border-green-500 hover:bg-green-600 transition-all"
          onClick={handleSubmit}
        >
            <span className='mr-4'>
                <span>
                <i class="fa-solid fa-cloud"></i>
                </span>
            </span>
          Register Tifl
        </button>
      </form>
      {
        showSuccessModal&&(
          <>
          <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-80'>
          <div   class="fixed  right-0 z-50 p-4 ml-[35%] mt-[13%] overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class=" w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="p-6 text-center">
                <span>
                <i class="fa-solid fa-thumbs-up text-green-500 text-7xl"></i>
                </span>
                <p>Tifl Registered Sucessfully And tag number is: <p className='font-bold text-lg'>{tagNumber}</p></p>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Do you want to print the tag now or print in bulk later?</h3>
                <button onClick={handlePrint}  type="button" class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Yes, Print Now
                </button>
                <button onClick={closeModal}  type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, Print Later</button>
            </div>
        </div>
    </div>
</div>
          
          </div>

          </>
        )
      }
    </div>
  );
};

export default AddAtfal;
