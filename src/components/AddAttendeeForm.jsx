import React, { useState } from 'react';
import { createAttendee } from '../services/api';
import { ToastContainer } from 'react-toastify';
import '../styles/attendee.mobile.css'

const AddAttendeeForm = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [auxiliary, setAuxiliary] = useState(''); // Default to 'lajna'
  const [type, setType] = useState(''); // Default to 'Handler'

  const handleSubmit = async(e) => {
    e.preventDefault();
    const attendeeData={
      fullName,auxiliary,type,phoneNumber
    }
    await createAttendee(attendeeData)
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


        </select>
      </div>
      <button onClick={handleSubmit} className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 ">
        Add Attendee
      </button>
    </div>
    </div>
  );
};

export default AddAttendeeForm;
