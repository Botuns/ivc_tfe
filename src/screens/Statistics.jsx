import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { getAllAtfalByDila, getCountOfAllAtfal } from '../services/api';
import { ToastContainer } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';
import DataCard from '../components/DataCard';

const Statistics = () => {
    const [atfal,setAtfal] = useState(0)
    const [attendee,setAttendee]= useState(0)    
    const [dila, setDila] = useState('');
    const [count,SetCount]=useState(0)
    const fetchNo =async()=>{
      const a = await getCountOfAllAtfal()
      setAtfal(a||0)
    }
    useEffect(() => {
      fetchNo()
    }, []); // Add 'participants' as a dependency
const fetch =async()=>{
  if(dila === ''){
    toast('Please select a dil\'a')
  }
  else{
    const a = await getAllAtfalByDila(dila)
  SetCount(a||0)
  await toast('Count for dil\'a returned successfully', {
    duration: 4000,
    position: 'top-center',
  
    // Styling
    style: {},
    className: '',
  
    // Custom Icon
    icon: '👏',
  
    // Change colors of success/error/loading icon
    iconTheme: {
      primary: '#000',
      secondary: '#fff',
    },
  
    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });
  }
}
    const participants = 10;

    useEffect(() => {
    //   fetch()
    }, []); // Add 'participants' as a dependency
    
    

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
        <ToastContainer/>
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
              <div className='flex flex-row'>
              <DataCard figure={atfal} name='Total Atfal'/>
              <DataCard figure={attendee+atfal} name={'Total Attendees'}/>
              </div>

              {/* <ChartDataChart participants={participants} atfal={atfal} /> */}
              
              <p className='bg-blue-500 p-4 rounded text-xl text-center font-extrabold shadow-lg text-white mt-4'>
                RESULT = {count}
              </p>
              
              <div className="mb-4 mt-3 w-[50%] flex flex-row gap-36">
          <div>
          <label htmlFor="dil'a" className="block mb-1">
            Select A Dil'a to get total counts per dil'a:
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
            <option value=''></option>

            {/* Add more options as needed */}
          </select>
          </div>
          <div>
          <button onClick={()=>fetch()} className='p-1 rounded font-bold text-sm text-white hover:bg-green-700 bg-green-500 w-full'>
                    Get Count
              </button>
          </div>
        </div>

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

export default Statistics;
