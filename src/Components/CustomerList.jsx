import React from 'react';
import '../css/CustomerList.css';
import InfiniteScroll from 'react-infinite-scroll-component'
import { v4 as uuidv4 } from 'uuid'
import { GiHamburgerMenu } from "react-icons/gi";

const CustomerList = ({ customers, onCustomerSelect, selectedCustomerId,fetchCustomers ,hasMore,handelHambur,hambur}) => {
  return (

    
    <div id="customer-list" className={hambur ? "responsive" : ""}>
      
      <InfiniteScroll
                dataLength={customers.length}
                next={fetchCustomers}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
     
      >
        {/* <GiHamburgerMenu/> */}
      {customers.map(customer => (
        <div
        key={uuidv4()}
          
          className={`customer-card ${selectedCustomerId === customer.id ? 'selected' : ''}`}
          onClick={() => onCustomerSelect(customer.id)}
        >
          <div className="customer-info">
            
            <div className="customer-name">Customer : {customer.id}</div>
            <div className="customer-title"> {customer.title}</div>
          </div>
        </div>
      ))}

      </InfiniteScroll>

    </div>
  );
};

export default CustomerList;