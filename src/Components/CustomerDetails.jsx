import React, { useEffect, useState } from 'react';
import '../css/CustomerDetails.css'

const CustomerDetails = ({ customer }) => {
  const [image, setImage] = useState([])


  useEffect(() => {
    let intervalId;

    if (image.length === 0) {
      intervalId = setTimeout(async () => {
        try {
          const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
          const data = await res.json()

          setImage(data.splice(0, 9));
        }
        catch (err) {
          console.log(err)
        }

        console.log("shba")
      },);

    }
    else {
      intervalId = setInterval(async () => {
        try {
          const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
          const data = await res.json()
          setImage(data.splice(0, 9));
        }
        catch (err) {
          console.log(err)
        }

        console.log("shba")
      }, 10000);

    }


    return () => clearInterval(intervalId);
  }, [image]);




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
          <img key={photo.id}
            src={photo.url} alt='loading' className="photo" />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;