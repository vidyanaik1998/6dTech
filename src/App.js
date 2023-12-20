import './App.css';
import Header from './Component/Header/Header';
import Payment from './Component/Payment/Payment';
import FormSection from './Component/Form/Form';
import { useState } from 'react';
import Footer from './Component/Footer/Footer';
import { notification } from "antd";

function App() {
  const initialdata = {
    items: [
      {
        name: 'receipt_number',
        label: "Receipt Number",
        type: 'TextField',
        inputtype:'number' ,
        required:true
      },
      {
        name: 'transcation_id',
        label: "Transcation Id",
        type: 'TextField',
        inputtype:'number' ,
        required:true
      },
      {
        name: 'amount',
        label: "Amount",
        type: 'TextField',
        inputtype:'number' ,
        required:true
      },
      {
        name: 'date_paid',
        label: "Date Paid",
        type: 'Datepicker',
        required:true
      },
      {
        name: 'payment_type',
        label: "Payment Type",
        type: 'DropDown',
        values: ['UPI', 'Internet Banking', 'Credit card'],
        required:true
      },
      {
        name: 'payor',
        label: "Payor",
        type: 'TextField',
        inputtype:'text' ,
        required:true
      },
      {
        name: 'description',
        label: "Description",
        type: 'Textarea',
        required:true
      },
    ],
  };

  const [inputDatas , setinputDatas] = useState(initialdata.items)

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (data) => {
    api.open({
      message: "Payment Successful",
      description:
       `${data.payor} has payed ${data.amount} ` ,
      duration: 0,
    });
  };
  
  const onFlexiSubmit = (data , e) => {
    e.preventDefault();
    console.log('Submitted Data:', data , Object.keys(data).length);
    Object.keys(data).length ===7 && openNotification(data);
  };

  return (
    <div className="App">
      <Header />
      <div className='banner'>
        <Payment />
        <FormSection  onSubmit={onFlexiSubmit} config={inputDatas} />
      </div>
      <Footer />
      {contextHolder}
    </div>
  );
}

export default App;
