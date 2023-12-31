import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import DataCard from '../components/DataCard';
import ChartDataChart from '../components/utils/ChartDataChart';
import Cta from '../components/Cta';
import AddAtfal from '../components/AddAtfal';
import { navigate } from 'wouter/use-location';
import { doesExistInStorage } from '../services/api';

const AddAtfalPage = () => {
    const participants = 3200;
    const atfal = 1200;
    const checkAuth=()=>{
      const res = doesExistInStorage('auth')
      if (res ===false){
        navigate('/')
      }
      console.log('okay')
    }
    useEffect(() => {
      checkAuth()
    
      
    }, [])
    
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
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
              <AddAtfal/>
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

export default AddAtfalPage;
