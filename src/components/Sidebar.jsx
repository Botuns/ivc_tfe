import React from 'react';
import { Link } from 'wouter'; // If using React Router for navigation
import '../styles/sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar bg-green-600 text-white h-screen w-56 flex flex-col justify-between ">
      <div className="mt-8 mx-4">
        <div className="text-3xl font-semibold mb-8">Utilities</div>
        <nav>
          <ul>
            <li className="mb-4">
              <Link
                to="/home"
                className="flex items-center p-2 rounded-lg transition-all hover:bg-green-800"
              >
                <span className='mr-4'>
                <i class="fa-solid fa-house-laptop"></i>
                </span>
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/new-tifl"
                className="flex items-center p-2 rounded-lg transition-all hover:bg-green-800"
              >
               <span className='mr-4'>
               <i class="fa-solid fa-user-plus"></i>
                </span>
                Register Tifl
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/new-attendee"
                className="flex items-center p-2 rounded-lg transition-all hover:bg-green-800"
              >
               <span className='mr-4'>
               <i class="fa-solid fa-user-plus"></i>
                </span>
                Register Attendee
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/export-data"
                className="flex items-center p-2 rounded-lg transition-all hover:bg-green-800"
              >
                <span className='mr-4'>
                <i class="fa-solid fa-download"></i>
                </span>
                Export Data
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/counts"
                className="flex items-center p-2 rounded-lg transition-all hover:bg-green-800"
              >
                <span className='mr-4'>
                <i class="fa-solid fa-data"></i>
                </span>
                Payments Data
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/statistics"
                className="flex items-center p-2 rounded-lg transition-all hover:bg-green-800"
              >
                <span className='mr-4'>
                <i class="fa-solid fa-table"></i>
                </span>
                Statistics tab
              </Link>
            </li>
            <li className="mb-4">
              <div className="flex items-center p-2 rounded-lg cursor-pointer transition-all hover:bg-green-600">
                <span className='mr-4'>
                <i class="fa-solid fa-table-list"></i>
                </span>
                Tables
              </div>
              <ul className="pl-8 mt-2">
                <li className="mb-2">
                  <Link
                    to="/see-all-atfal"
                    className="flex items-center transition-all hover:text-black"
                  >
                    <span className='mr-4'>
                    <i class="fa-solid fa-users"></i>
                    </span>
                    See All Atfal
                  </Link>
                </li>
                <li>
                  <Link
                    to="/see-all-attendee"
                    className="flex items-center transition-all hover:text-black"
                  >
                    <span className='mr-4'>
                    <i class="fa-solid fa-users"></i>
                    </span>
                    See All attendee
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mb-8 mx-4">
        {/* Add any footer content here */}
      </div>
    </div>
  );
};

export default Sidebar;
