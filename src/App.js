import React, { useState, useEffect } from 'react';
import './App.css';
import CustomerList from './Components/CustomerList';
import CustomerDetails from './Components/CustomerDetails';


const App = () => {
  const data = [
    
    {
      name: "Customer",
      number : '01',
      title : "This information provides a basic overview of a customer's details, preferences, recent purchases, and any additional notes or feedback. It can help businesses personalize interactions and tailor their offerings to better meet the customer's needs.",
      id: 1
    },    {
      name: "Customer 02",
      title : "This information provides a basic overview of a customer's details, preferences, recent purchases, and any additional notes or feedback. It can help businesses personalize interactions and tailor their offerings to better meet the customer's needs.",
      id: 2
    },    {
      name: "Customer 03",
      title : "This information provides a basic overview of a customer's details, preferences, recent purchases, and any additional notes or feedback. It can help businesses personalize interactions and tailor their offerings to better meet the customer's needs.",
      id: 3
    },    {
      name: "Customer 04",
      title : "This information provides a basic overview of a customer's details, preferences, recent purchases, and any additional notes or feedback. It can help businesses personalize interactions and tailor their offerings to better meet the customer's needs.",
      id: 4
    }
  ]
  const [customers, setCustomers] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  // useEffect(() => {
  //   const fetchCustomers = async () => {
  //     try {
  //       const response = await fetch('https://cubebeckendcustomer.onrender.com/datas');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch customers');
  //       }
  //       const data = await response.json();
  //       setCustomers(data);
  //     } catch (error) {
  //       console.error('Error fetching customers:', error);
  //     }
  //   };

  //   fetchCustomers();
  // }, []);
  
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
  // const handleCustomerSelect = (customerId) => {
  //   setSelectedCustomerId(customerId);
  // };

  const handleCustomerSelect = (dataId) => {
    setSelectedCustomerId(dataId);
  };

  return (
    <div className="app">
      <CustomerList
        // customers={customers}
        // onCustomerSelect={handleCustomerSelect}
        // selectedCustomerId={selectedCustomerId}

        customers={customers}
        onCustomerSelect={handleCustomerSelect}
        selectedCustomerId={selectedCustomerId}
      />
      <CustomerDetails customer={customers.find(customer => customer.id === selectedCustomerId)} />
    </div>
  );
};

export default App;