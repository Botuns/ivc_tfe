import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { _capitalizeName, _convertStage } from '../../services/utils';

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
      <div className="p-1 w-[6cm]">
  <div className="w-full p-4 bg-green-500 rounded-lg shadow-lg">
    <div className="flex justify-between items-center">
      <h2 className="text-sm font-extrabold mb-4 text-white">ATFAL REGIONAL IVC OYO 2023</h2>
      <img
        className="w-8 h-8 mr-2 rounded-full border-2 border-white"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqNuiuXCWRy76qvGIL6hFPRFwmUhcc_a7WQldY2NxoeB_QUYgeEb3xVWItmBAMp8kXWw&usqp=CAU"
        alt="logo"
      />
    </div>
    <hr className="border-t-2 border-white font-[900]" />
    <div className="grid grid-cols-2 gap-4 text-white">
      <div>
        <p className="text-sm font-bold">Full Name:</p>
        <p className="text-sm font-semibold">{_capitalizeName(user._fullName)}</p>

        <p className="text-sm font-bold">Age:</p>
        <p className="text-lg font-semibold">{user._age}</p>

        <p className="text-sm font-bold">Muqami:</p>
        <p className="text-sm font-semibold">{user._muqami}</p>
      </div>

      <div>
        <p className="text-sm font-bold">Stage:</p>
        <p className="text-sm font-semibold">{_convertStage(user._stage)}</p>

        <p className="text-sm font-bold">Tag Number:</p>
        <p className="text-sm font-semibold">{user._tagNumber}</p>

        <p className="text-sm font-bold">Dila:</p>
        <p className="text-sm font-semibold">{user._dila}</p>
      </div>
    </div>

    <div className="mt-6 border-t-2">
      <p className="text-sm font-bold text-white">Created At:</p>
      <p className="text-sm font-semibold">{user.createdAt}</p>
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
