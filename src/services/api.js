import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// registers new tifl
export const RegisterAtfal = async (data) => {
  const { fullname, age, dila, muqami, stage } = data;

  try {
    // const response = await axios.post("https://ileojaapp.com.ng/?id=user3&email_sent", {
    //   fullname,
    //   age,
    //   dila,
    //   muqami,
    //   stage,
    // });
    // if(!response){
    //     toast.error('unable to connect right now')
    // }

    // Handle successful response here (if needed)
    // For example, you can return or do something with the response data
    // if(response.data.success===true){
    //     toast.success('Tifl Registered sucessfully')
    // }
    // return response.data;
    toast.success('success',{position:'top-center'})
    return data
  } catch (error) {
    // Handle errors using toast notifications
    toast.error("An error occurred. Please try again later.");

    // You can also show the error message from the server if available
    // For example, if the server returns an error message in the response
    // you can display it in the toast notification
    if (error.response && error.response.data && error.response.data.message) {
      toast.error(error.response.data.message);
    }

    // You can also console log the error for debugging purposes
    console.error("Error in RegisterAtfal:", error);

    // Throw the error to the calling function so it can handle it further if needed
    throw error;
  }
};
