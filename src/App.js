import React, { useState, useEffect } from 'react';
import './App.css';
import CustomerList from './Components/CustomerList';
import CustomerDetails from './Components/CustomerDetails';


const App = () => {
  
  
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);



  const fetchData = async () => {
    try {
      const response = await fetch(`https://cubebeckendcustomer.onrender.com/datas?_page=${page}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const responseData = await response.json();
      if (responseData.length === 0) {
        setHasMore(false);
      } else {
        setData(prevData => [...prevData, ...responseData]);
        setPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, [page]);
 
  const handleCustomerSelect = (dataId) => {
    setSelectedCustomerId(dataId);
  };

  return (
    <div className="app">
      <CustomerList

        customers={data}
        onCustomerSelect={handleCustomerSelect}
        selectedCustomerId={selectedCustomerId}
        
        hasMore={hasMore}
      />
      <CustomerDetails customer={data.find(customer => customer.id === selectedCustomerId)} />
    </div>
  );
};

export default App;