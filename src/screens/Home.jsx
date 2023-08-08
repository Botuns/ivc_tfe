import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { doesExistInStorage, getCountOfAllAtfal, getCountOfAllAttendees, isAuthAdminPassword } from '../services/api';
import DataCard from '../components/DataCard';
import ChartDataChart from '../components/utils/ChartDataChart';
import Cta from '../components/Cta';
import { navigate } from 'wouter/use-location';
import { Toaster, toast } from 'react-hot-toast';
import '../styles/home.mobile.css'
import { ColorRing } from 'react-loader-spinner';


const Home = () => {
    const [atfal,setAtfal] = useState(0)
    const [attendee,setAttendee]= useState(0)    
    const [loader , setLoader] = useState(false)


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
const fetch =async()=>{
  setLoader(true)
  const a = await getCountOfAllAtfal()
  const b = await getCountOfAllAttendees()
  setLoader(false)
  setAtfal(a||0)
  setAttendee(b)
}
    const participants = 10;

    useEffect(() => {
      fetch()
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
              <div className='flex flex-row home-card'>
              <DataCard figure={atfal} name='Total Atfal'/>
              <DataCard figure={attendee} name={'Total Attendees'}/>
              <DataCard figure={atfal + attendee} name={'Total Present'}/>
              </div>

              <ChartDataChart participants={attendee} atfal={atfal} />



            </div>
            <Cta/>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
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

export default Home;
