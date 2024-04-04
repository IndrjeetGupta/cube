import React from 'react';
import '../css/CustomerList.css';
import InfiniteScroll from 'react-infinite-scroll-component'

const CustomerList = ({ customers, onCustomerSelect, selectedCustomerId,fetchCustomers ,hasMore}) => {
  return (
    <div className="customer-list">
      <InfiniteScroll
                dataLength={customers.length}
                next={fetchCustomers}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
     
      >
      {customers.map(customer => (
        <div
          key={customer.id}
          
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