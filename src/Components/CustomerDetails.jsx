import React, { useEffect, useState } from 'react';
import '../css/CustomerDetails.css'

const CustomerDetails = ({ customer }) => {
  const [image, setImage] = useState([])

  const fetchImage = () => {

    if (image.length === 0) {
      setTimeout(async () => {
        try {
          const res = await fetch("https://fakestoreapi.com/products?limit=9");
          const data = await res.json();
          setImage(data)

        }
        catch (err) {
          console.log(err)

        }
      })
    }
    else {
      setTimeout(async () => {
        try {
          const res = await fetch("https://fakestoreapi.com/products?limit=9");
          const data = await res.json();
          setImage(data)

        }
        catch (err) {
          console.log(err)

        }

      }, 10000)

    }
  }

  useEffect(() => {
    fetchImage()

  }, [image])



  if (!customer) {
    return <div className="customer-details">No customer selected</div>;
  }

  return (
    <div className="customer-details">

      <div className="detail-name"> Customer {customer.id} details here

      </div>
      <div className="detail-title">
        {customer.title}
      </div>

      <div className="photo-grid">

        {image.map((photo) => (
          <img src={`https://source.unsplash.com/random/300x200?sig=${Math.random()}`} alt='loading' className="photo" />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;