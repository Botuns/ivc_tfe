import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { doesExistInStorage, getCountOfAllAtfal, isAuthAdminPassword } from '../services/api';
import DataCard from '../components/DataCard';
import ChartDataChart from '../components/utils/ChartDataChart';
import Cta from '../components/Cta';
import AllAtfal from '../components/AllAtfal';
import AllAttendee from '../components/AllAttendee';
import { navigate } from 'wouter/use-location';
import { Toaster, toast } from 'react-hot-toast';

const AllAttendeePage = () => {
  const checkAuth=()=>{
    const res = doesExistInStorage('auth')
    if (res ===false){
      navigate('/')
    }
    console.log('okay')
  }
  const checkAdmin= async()=>{
    const res = isAuthAdminPassword()
    if(res===false){
      toast('Unauthorized')
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate('/new-tifl')
    }
  }
    useEffect(() => {
      checkAuth()
      checkAdmin()
    }, []); // Add 'participants' as a dependency
    
    

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <Toaster/>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar/>
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header/>
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {/* <Outlet />   others goes here*/}  
              <AllAttendee/>              
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default AllAttendeePage;
