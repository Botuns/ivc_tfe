import React, { useState } from 'react';
import { RegisterAtfal } from '../services/api';
import { ToastContainer } from 'react-toastify';
const AddAtfal = () => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [dila, setDila] = useState('select dila');
  const [muqami, setMuqami] = useState('muqami1');
  const [isVIP, setIsVIP] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("done")
    const data = {
      fullName,age,muqami,dila
    }
    // Here you can perform actions with the collected data,

    // such as sending it to a server or updating the state of a parent component.

    RegisterAtfal(data)

  };

  return (
    <div className="bg-green-500 text-black p-6 rounded-lg shadow-lg">
      <ToastContainer
    autoClose={5000}
    hideProgressBar={true}
/>
      <h2 className="text-2xl font-semibold mb-4">Add New Tifl</h2>
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
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-700"
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
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-700"
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
            className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black focus:border-green-700"
          >
            <option value="">Select Dil'a</option>
            <option value="dil'a1">Dil'a 1</option>
            <option value="dil'a2">Dil'a 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="muqami" className="block mb-1">
            Muqami:
          </label>
          <select
            id="muqami"
            value={muqami}
            onChange={(e) => setMuqami(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black focus:border-green-700"
          >
            <option value="">Select Muqami</option>
            <option value="muqami1">Muqami 1</option>
            <option value="muqami2">Muqami 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="muqami" className="block mb-1">
            Stage:
          </label>
          <select
            id="muqami"
            value={muqami}
            onChange={(e) => setMuqami(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black focus:border-green-700"
          >
            <option value="">Select Muqami</option>
            <option value="muqami1">Muqami 1</option>
            <option value="muqami2">Muqami 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all"
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
    </div>
  );
};

export default AddAtfal;
