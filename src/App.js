import React, { useState, useEffect } from 'react';
import './App.css';
import CustomerList from './Components/CustomerList';
import CustomerDetails from './Components/CustomerDetails';


const App = () => {
  
  const [customers, setCustomers] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

 
  const fetchCustomers = async () => {
    try{
      const res = await fetch('https://cubebeckendcustomer.onrender.com/datas')
      const data = await res.json()
      setCustomers(data)
    }
    catch(err){
      console.log(err)
    }
  }
  useEffect(() =>{
    fetchCustomers()
  },[])


  const handleCustomerSelect = (dataId) => {
    setSelectedCustomerId(dataId);
  };

  return (
    <div className="app">
      <CustomerList

        customers={customers}
        onCustomerSelect={handleCustomerSelect}
        selectedCustomerId={selectedCustomerId}
      />
      <CustomerDetails customer={customers.find(customer => customer.id === selectedCustomerId)} />
    </div>
  );
};

export default App;