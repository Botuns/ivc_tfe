import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  text: {
    marginBottom: 10,
  },
});

const generatePDF = (user) => {
  // const input = document.getElementById('user-card');
  // html2canvas(input).then((canvas) => {
  //   const imgData = canvas.toDataURL('image/png');
  //   const pdf = new jsPDF();
  //   pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
  //   pdf.save('user-card.pdf');
  // });
  window.print()
};

const UserCard = ({ user, onCancel }) => {
  return (
    <div
      id="user-card"
      className="flex flex-col items-center justify-center w-full h-screen bg-green-200"
    >
      <div className="w-80  p-6 bg-white rounded-lg shadow-md">
      <div className="card">
  <div className='flex justify-between'>
  <h2 className="text-2xl font-semibold mb-4">Tifl Card</h2>
  <img className="w-8 h-8 mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqNuiuXCWRy76qvGIL6hFPRFwmUhcc_a7WQldY2NxoeB_QUYgeEb3xVWItmBAMp8kXWw&usqp=CAU" alt="logo"/>
  </div>
  <hr className='font-[900]'/>
  <div className="grid grid-cols-2 gap-4">
    <div>
      <p className="text-lg font-medium">Full Name:</p>
      <p className="text-lg font-semibold">{user._fullName}</p>
     
      <p className="text-lg font-medium">Age:</p>
      <p className="text-lg font-semibold">{user._age}</p>

      <p className="text-lg font-medium">Muqami:</p>
      <p className="text-lg font-semibold">{user._muqami}</p>
    </div>

    <div>
      <p className="text-lg font-medium">Stage:</p>
      <p className="text-lg font-semibold">{user._stage}</p>

      <p className="text-lg font-medium">Tag Number:</p>
      <p className="text-lg font-semibold">{user._tagNumber}</p>

      <p className="text-lg font-medium">Dila:</p>
      <p className="text-lg font-semibold">{user._dila}</p>
    </div>
  </div>

  <div className="mt-6">
    <p className="text-lg font-medium">Created At:</p>
    <p className="text-lg font-semibold">{user.createdAt}</p>

    <p className="text-lg font-medium">Updated At:</p>
    <p className="text-lg font-semibold">{user.updatedAt}</p>
  </div>
</div>

        
    </div>
       <div className='flex justify-between'>
       <button
        className="mt-6 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md"
        onClick={() => generatePDF(user)}
      >
        Print to PDF
      </button>
      <button
          className="mt-6 ml-8 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md"
          onClick={onCancel}
        >
          Cancel
        </button>
       </div>
    </div>
  );
};

export default UserCard;
