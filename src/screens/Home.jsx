import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { getCountOfAllAtfal } from '../services/api';
import DataCard from '../components/DataCard';
import ChartDataChart from '../components/utils/ChartDataChart';
import Cta from '../components/Cta';

const Home = () => {
    const [atfal,setAtfal] = useState(0)
    const [attendee,setAttendee]= useState(0)    
const fetch =async()=>{
  const a = await getCountOfAllAtfal()
  setAtfal(a||0)
}
    const participants = 10;

    useEffect(() => {
      fetch()
    }, []); // Add 'participants' as a dependency
    
    

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
              <div className='flex flex-row'>
              <DataCard figure={atfal} name='Total Atfal'/>
              <DataCard figure={attendee} name={'Total Attendees'}/>
              <DataCard figure={atfal + attendee} name={'Total Present'}/>
              </div>

              <ChartDataChart participants={participants} atfal={atfal} />



            </div>
            <Cta/>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default Home;
