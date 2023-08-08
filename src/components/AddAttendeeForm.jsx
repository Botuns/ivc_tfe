import React, { useState } from 'react';
import { createAttendee } from '../services/api';
import { ToastContainer } from 'react-toastify';
import '../styles/attendee.mobile.css'
import { ColorRing } from 'react-loader-spinner';


const AddAttendeeForm = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [dila, setDila] = useState('');
  const [auxiliary, setAuxiliary] = useState(''); // Default to 'lajna'
  const [type, setType] = useState(''); // Default to 'Handler'
  const [loader , setLoader] = useState(false)


  const handleSubmit = async(e) => {
    setLoader(true)
    e.preventDefault();
    const attendeeData={
      fullName,auxiliary,type,dila,phoneNumber
    }
    await createAttendee(attendeeData)
    setLoader(false)
  };

  return (
    <div>
      <ToastContainer/>
        <p className='p-3 rounded bg-green-500 text-center font-bold text-white text-xl'>Register: Attendee</p>
        <div  className="space-y-4 mt-8 shadow-lg p-4 w-[80%] justify-center items-center ml-24 att ">
      <div>
        <label htmlFor="fullName" className="block text-gray-700">
          Full Name:
        </label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="block w-full px-4 py-2 rounded-lg shadow-sm focus:ring focus:ring-green-200 border border-green-500"
          required
        />
      </div>
      <div>
        <label htmlFor="fullName" className="block text-gray-700">
          Phone number: <span className='text-sm text-red-600 rounded'>optional</span>
        </label>
        <input
          type="text"
          id="fullName"
          value={phoneNumber}
          onChange={(e) => setPhone(e.target.value)}
          className="block w-full px-4 py-2 rounded-lg shadow-sm focus:ring focus:ring-green-200 border border-green-500"
          required
        />
      </div>
      <div>
        <label htmlFor="auxiliary" className="block text-gray-700">
          Auxiliary:
        </label>
        <select
          id="auxiliary"
          value={auxiliary}
          onChange={(e) => setAuxiliary(e.target.value)}
          className="block w-full px-4 py-2 rounded-lg shadow-sm focus:ring focus:ring-green-200 border border-green-500"
          required
        >
          <option value="">Select an auxiliary</option>
          <option value="lajna">Lajna</option>
          <option value="khudam">Khudam</option>
          <option value="ansarullah">Ansarullah</option>
          <option value="not-applicable">Not Applicable</option>
        </select>
      </div>
      <div>
        <label htmlFor="type" className="block text-gray-700">
          Type:
        </label>
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
          <option value="Medical">Medical</option>
          {/* <option value="Wakariamoh">Wakariamoh</option> */}






        </select>
      </div>
      <div>
      <label htmlFor="type" className="block text-gray-700">
          Dila:
        </label>
        <select
            id="dil'a"
            value={dila}
            onChange={(e) => setDila(e.target.value)}
            required
            className="w-full px-4 py-2 border border-green-500 rounded-lg focus:outline-none text-black focus:border-green-700"
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

            {/* Add more options as needed */}
          </select>
      </div>
      <button onClick={handleSubmit} className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 ">
        Add Attendee
      </button>
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
    </div>
  );
};

export default AddAttendeeForm;
