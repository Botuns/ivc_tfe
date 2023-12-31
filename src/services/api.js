import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { navigate } from 'wouter/use-location';

const base_url= 'https://oyo-ivc2023-37ca5d32b76c.herokuapp.com/api'

// registers new tifl
export const RegisterAtfal = async (data) => {
  const { fullName, age, dila, muqami, stage,amountPaid } = data;

  try {
    const response = await axios.post(`${base_url}/atfal/new`, {
      fullName,
      age,
      dila,
      muqami,
      stage,
      amountPaid
    });
    console.log(response)
    if(!response){
        toast.error('unable to connect right now')
    }
    if(response.data.newAtfal==="Duplicate Entry Detected"){
      toast.info('Duplicate Entry Detected',{position:'top-center'})
      return
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
  console.log(data)

  try {
    const response = await axios.post(`${base_url}/auth/login`, {
      username,
      password
    });
    if(!response){
      toast.error('unable to connect right now')

    }
    if(response.status===404){
      toast.error('Invalid Credentials')
    }
    else{
      console.log(response)
      localStorage.setItem('auth',JSON.stringify(response.data?.user))
      toast.success('Login Successful!')
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate('/home')
    }

  } catch (error) {
    // Handle errors using toast notifications
    console.log(error)
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

    export const getAllAttendeeByIds = async(d)=>{
      const ids = [...d];
    console.log(`Thiese are the ids: ${ids}`)

    try {
    const response = await axios.get(`${base_url}/attendee/${ids}`); // Pass ids as a URL parameter
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
    export const returnAllAtfalByDila = async(dila)=>{
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
        return response.data
    } catch (error) {
      toast.error(error)
    }
    }

export const showToast=()=>{
  return toast.error('You have not selected any tag to print')
}

export const getAllAttendees = async () => {
  try {
    const response = await axios.get(`${base_url}/attendees`);
    // console.log(response.data)
    return response.data;
  } catch (error) {
    toast.error("An error occurred while fetching attendees.");
    console.error("Error in getAllAttendees:", error);
  }
};

// Method to get count of all attendees
export const getCountOfAllAttendees = async () => {
  try {
    const response = await axios.get(`${base_url}/attendees/count`);
    return response.data.count;
  } catch (error) {
    toast.error("An error occurred while fetching attendee count.");
    console.error("Error in getCountOfAllAttendees:", error);
  }
};

// Method to get count of attendees by type
export const getCountOfAttendeesByType = async (type) => {
  try {
    const response = await axios.get(`${base_url}/attendees/count/${type}`);
    return response.data.count;
  } catch (error) {
    toast.error("An error occurred while fetching attendee count by type.");
    console.error("Error in getCountOfAttendeesByType:", error);
  }
};

// update dila and duty

export const updateAttendee = async (data)=>{
  const {attendeeId,newDila,newType} = data
  try {
    const response = await axios.put(`${base_url}/attendee/update/${attendeeId}/${newDila}/${newType}`)
    console.log(response)
    if (response.status===200) {
      return true
    }
    return false
  } catch (error) {
    toast.error(error)
  }

}
// Method to get count of attendees by auxiliary
export const getCountOfAttendeesByAuxiliary = async (auxiliary) => {
  try {
    const response = await axios.get(
      `${base_url}/attendees/count/auxiliary/${auxiliary}`
    );
    return response.data.count;
  } catch (error) {
    toast.error("An error occurred while fetching attendee count by auxiliary.");
    console.error("Error in getCountOfAttendeesByAuxiliary:", error);
  }
};

// Method to create a new attendee
export const createAttendee = async (attendeeData) => {
  try {
    console.log('hello')
    const response = await axios.post(`${base_url}/attendees`, attendeeData);
    if (response.status === 201) {
      toast.success("Attendee created successfully", { position: "top-center" });
    }
    console.log(response)
    return response.data;
  } catch (error) {
    toast.error("An error occurred while creating an attendee.");
    console.error("Error in createAttendee:", error);
  }
};
export const getCountOfAtfalByStage = async (stage) => {
  try {
    const response = await axios.get(
      `${base_url}/atfal/stage/${stage}`
    );
    return response.data.count;
  } catch (error) {
    toast.error("An error occurred while fetching attendee count by auxiliary.");
    console.error("Error in getCountOfAttendeesByAuxiliary:", error);
  }
};

export function doesExistInStorage(itemKey) {
  const item = localStorage.getItem(itemKey);
  return item !== null;
}

// Function to check if the auth contains admin and password
export function isAuthAdminPassword() {
  const authData = JSON.parse(localStorage.getItem('auth'));
  return (
    authData &&
    authData._username === 'admin' &&
    authData._password === 'password'
  );
}
