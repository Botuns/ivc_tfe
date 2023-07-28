import React, { useState } from 'react';

const AddAttendeeForm = () => {
  const [fullName, setFullName] = useState('');
  const [auxiliary, setAuxiliary] = useState('lajna'); // Default to 'lajna'
  const [type, setType] = useState('Handler'); // Default to 'Handler'

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block text-gray-700">
          Full Name:
        </label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="block w-full px-4 py-2 rounded-lg shadow-sm focus:ring focus:ring-green-200"
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
          className="block w-full px-4 py-2 rounded-lg shadow-sm focus:ring focus:ring-green-200"
          required
        >
          <option value="lajna">Lajna</option>
          <option value="khudam">Khudam</option>
          <option value="ansarullah">Ansarullah</option>
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
          className="block w-full px-4 py-2 rounded-lg shadow-sm focus:ring focus:ring-green-200"
          required
        >
          <option value="Handler">Handler</option>
          <option value="Guest">Guest</option>
          <option value="Security">Security</option>
          <option value="Kitchen">Kitchen</option>
          <option value="AudioVisual">AudioVisual</option>
          <option value="Ishaat">Ishaat</option>
          <option value="Electricity">Electricity</option>
          <option value="Mobilization">Mobilization</option>
          <option value="Volunteer">Volunteer</option>
        </select>
      </div>
      <button type="submit" className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">
        Add Attendee
      </button>
    </form>
  );
};

export default AddAttendeeForm;
