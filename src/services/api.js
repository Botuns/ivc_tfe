import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const base_url= 'http://localhost:4000/api'

// registers new tifl
export const RegisterAtfal = async (data) => {
  const { fullName, age, dila, muqami, stage } = data;

  try {
    const response = await axios.post(`${base_url}/atfal/new`, {
      fullName,
      age,
      dila,
      muqami,
      stage,
    });
    console.log(response)
    if(!response){
        toast.error('unable to connect right now')
    }

    
    if(response.data.status===true){
       toast.success('Atfal Registered sucessfully',{position:'top-center'})    }
     

    return response.data;

  } catch (error) {
    // Handle errors using toast notifications
    toast.error("An error occurred. Please try again later.");

    
    if (error.response && error.response.data && error.response.data.message) {
      toast.error(error.response.data.message);
    }

    // You can also console log the error for debugging purposes
    console.error("Error in RegisterAtfal:", error);

    // Throw the error to the calling function so it can handle it further if needed
    throw error;
  }
};


export const getCountOfAllAtfal = async()=>{
try {
  const response = await axios.get(`${base_url}/atfal/counts`)
  console.log(response.data.count)
  if(!response){
    toast.error('cant connect right now and i don\'t know why')
  }
    if(response.data.status !== true){
      toast.error('An error occured while fetching number')
    }  
    return response.data.count
} catch (error) {
  toast.error(error)
}
}

export const getAllAtfal = async()=>{
  try {
    const response = await axios.get(`${base_url}/atfal`)
    console.log(response.data.allAtfal)
    if(!response){
      toast.error('cant connect right now and i don\'t know why')
    }
      if(response.data.status !== true){
        toast.error('An error occured while fetching lists')
      }  
      return response.data.allAtfal
  } catch (error) {
    toast.error(error)
  }
  }

  export const getAllAtfalByIds = async(d)=>{
      const ids = [...d];
    console.log(`Thiese are the ids: ${ids}`)

    try {
    const response = await axios.get(`${base_url}/atfal/${ids}`); // Pass ids as a URL parameter
      // console.log(response.data.lists)
      if(!response){
        toast.error('cant connect right now and i don\'t know why')
      }
        if(response.data.status !== true){
          toast.error('An error occured while fetching lists')
        }  
        return response.data.lists
    } catch (error) {
      toast.error(error)
    }
    }