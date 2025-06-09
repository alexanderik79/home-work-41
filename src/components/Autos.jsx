import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Autos = () => {
  const apiKey = '0190ed4a-9d93-4b55-ac50-96123dbc39e6';
  const productId = Math.floor(Math.random() * 25) + 1;
  const company = 'AutoPlus';

  const [auto, setAuto] = useState();

  useEffect(() => {

    axios.get(`https://car-dealer-app.botdepo.shop/api/products/product/${productId}/${company}`,
        {
            headers: {
                'X-API-Key': apiKey
            }
        }
    )
      .then(response => {
        setAuto(response.data); 
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
      });
  }, []);

  return (

    <>
      {data ? (
        <div>
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <p>Price: ${data.price}</p>
          <p>Trade: {data.make}</p>
          <p>Model: {data.model}</p>
          <p>Year: {data.year}</p>
          <img src={data.photoList?.[0]} alt={data.name} width={300} />
        </div>
      ) : (
        <p>Np data</p>
      )}
    </>
  );
};

export default Autos;
