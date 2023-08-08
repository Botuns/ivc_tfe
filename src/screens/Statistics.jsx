import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { doesExistInStorage, getAllAtfalByDila, getCountOfAllAtfal, getCountOfAllAttendees, getCountOfAtfalByStage, getCountOfAttendeesByAuxiliary, getCountOfAttendeesByType, isAuthAdminPassword } from '../services/api';
import { ToastContainer } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';
import DataCard from '../components/DataCard';
import { navigate } from 'wouter/use-location';

const Statistics = () => {
    const [atfal,setAtfal] = useState(0)
    const [attendee,setAttendee]= useState(0)    
    const [dila, setDila] = useState('');
    const [stage, setStage] = useState('');
    const [aux, setAux] = useState('');
    const [type, setType] = useState('');

    const [count,SetCount]=useState(0)
    const checkAdmin= async()=>{
      const res = isAuthAdminPassword()
      if(res===false){
        toast('Unauthorized')
        await new Promise((resolve) => setTimeout(resolve, 1000));
        navigate('/new-tifl')
      }
    }
    const checkAuth=()=>{
      const res = doesExistInStorage('auth')
      if (res ===false){
        navigate('/')
      }
      console.log('okay')
    }
    const fetchNo =async()=>{
      const a = await getCountOfAllAtfal()
      const b = await getCountOfAllAttendees()
      setAtfal(a||0)
      setAttendee(b||0)
    }
    useEffect(() => {
      fetchNo()
      checkAuth()
      checkAdmin()
    }, []); // Add 'participants' as a dependency
    // done
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
// done
const fetchAux =async()=>{
  if(aux === ''){
    toast('Please select a auxiliary')
  }
  else{
    const a = await getCountOfAttendeesByAuxiliary(aux)
    SetCount(a||0)
  await toast('Count for auxiliaries returned successfully', {
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
const fetchtype =async()=>{
  if(type === ''){
    toast('Please select a type')
  }
  else{
    const a = await getCountOfAttendeesByType(type)
  SetCount(a||0)
  await toast('Count for volunteers/attendee returned successfully', {
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
const fetchStage =async()=>{
  if(stage === ''){
    toast('Please select a stage')
  }
  else{
    const a = await getCountOfAtfalByStage(stage)
  SetCount(a||0)
  await toast('Count per stage returned successfully', {
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
              <DataCard figure={attendee} name={'Total Attendees'}/>
              <DataCard figure={attendee+atfal} name={'Total Registered'}/>
              </div>

              {/* <ChartDataChart participants={participants} atfal={atfal} /> */}
              
              <p className='bg-blue-500 p-4 rounded text-xl text-center font-extrabold shadow-lg text-white mt-4'>
                RESULT = {count}
              </p>
              
           <div className='ml-56'>
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
            <option value='Oke-ogun'>Oke-Ogun</option>

            {/* Add more options as needed */}
          </select>
          </div>
          <div>
          <button onClick={()=>fetch()} className='mt-6 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md  w-[3cm]'>
                    Get Count
              </button>
          </div>
        </div>
        <div className="mb-4 mt-3 w-[50%] flex flex-row gap-36">
          <div>
          <label htmlFor="dil'a" className="block mb-1">
            Select A Volunteer type to get total counts per volunteer:
          </label>
          <select
            id="dil'a"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-2 border border-green-500 rounded-lg focus:outline-none text-black focus:border-green-700"
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
          <option value="Vip-Care">Vip-care</option>
          <option value="Tajneed">Tajneed</option>
          <option value="Sports">Sports</option>
          <option value="Wakariamoh">Wakariamoh</option>
          <option value="Medical">Medical</option>



            {/* Add more options as needed */}
          </select>
          </div>
          <div>
          <button onClick={()=>fetchtype()} className='mt-6 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md  w-[3cm]'>
                    Get Count
              </button>
          </div>
        </div>
        <div className="mb-4 mt-3 w-[50%] flex flex-row gap-36">
          <div>
          <label htmlFor="dil'a" className="block mb-1">
            Select A stage to get total counts per stage:
          </label>
          <select
            id="dil'a"
            value={stage}
            onChange={(e) => setStage(e.target.value)}
            className="w-full px-4 py-2 border border-green-500 rounded-lg focus:outline-none text-black focus:border-green-700"
          >
            <option value='stage_one'>Stage-One(5-7)</option>
            <option value='stage_two'>Stage-Two(8-10)</option>
            <option value='stage_three'>Stage-Three(11-12)</option>
            <option value='stage_four'>Stage-Four(13-15)</option>


            {/* Add more options as needed */}
          </select>
          </div>
          <div>
          <button onClick={()=>fetchStage()} className='mt-6 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md  w-[3cm]'>
                    Get Count
              </button>
          </div>
        </div>
        <div className="mb-4 mt-3 w-[50%] flex flex-row gap-36">
          <div>
          <label htmlFor="dil'a" className="block mb-1">
            Select A Auxiliary to get total counts per auxiliary:
          </label>
          <select
            id="dil'a"
            value={aux}
            onChange={(e) => setAux(e.target.value)}
            className="w-full px-4 py-2 border border-green-500 rounded-lg focus:outline-none text-black focus:border-green-700"
          >
            <option value="">Select an auxiliary</option>
          <option value="lajna">Lajna</option>
          <option value="khudam">Khudam</option>
          <option value="ansarullah">Ansarullah</option>

            {/* Add more options as needed */}
          </select>
          </div>
          <div>
          <button onClick={()=>fetchAux()} className='mt-6 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md  w-[3cm]'>
                    Get Count
              </button>
          </div>
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
