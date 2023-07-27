import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { navigate } from 'wouter/use-location';

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
       await toast.success('Atfal Registered sucessfully',{position:'top-center'})    
      
      
      }
      
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
  }
};
export const Login = async (data) => {
  const { username, password } = data;

  try {
    const response = await axios.post(`${base_url}/auth/login`, {
      username,
      password
    });
    console.log(response)
    if(!response){
      toast.error('unable to connect right now')

    }
    if(response.status===404){
      toast.error('Invalid Credentials')
    }
    else{
      toast.success('Login Successful!')
      navigate('/home')
    }

  } catch (error) {
    // Handle errors using toast notifications
    toast.error(error.message);
  }
};


export const getCountOfAllAtfal = async()=>{
try {
  const response = await axios.get(`${base_url}/atfal/counts`)
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

    export const getAllAtfalByDila = async(dila)=>{
      console.log('seen')
    try {
    const response = await axios.get(`${base_url}/atfal/dila/${dila}`); // Pass ids as a URL parameter
      console.log(response.data.length)
      if(!response){
        toast.error('cant connect right now and i don\'t know why')
      }
        if(response ===500){
          toast.error('An error occured while fetching lists')
        }  
        return response.data.length
    } catch (error) {
      toast.error(error)
    }
    }

export const showToast=()=>{
  return toast.error('You have not selected any tag to print')
}