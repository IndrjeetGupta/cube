import React from 'react';
import '../css/CustomerList.css';

const CustomerList = ({ customers, onCustomerSelect, selectedCustomerId }) => {
  return (
    <div className="customer-list">
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
    </div>
  );
};

export default CustomerList;