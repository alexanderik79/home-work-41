import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Autos = ({ autoId }) => {
  const apiKey = '0190ed4a-9d93-4b55-ac50-96123dbc39e6';
  const company = 'AutoPlus';



  const [auto, setAuto] = useState();

  useEffect(() => {

    axios.get(`https://car-dealer-app.botdepo.shop/api/products/product/${autoId}/${company}`,
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
  }, [autoId]);

  return (

    <>
      {auto ? (
        <div>
          <h2>{auto.name}</h2>
          <p>{auto.description}</p>
          <p>Price: ${auto.price}</p>
          <p>Trade: {auto.make}</p>
          <p>Model: {auto.model}</p>
          <p>Year: {auto.year}</p>
          <img src={auto.photoList?.[0]} alt={auto.name} width={300} />
        </div>
      ) : (
        <p>Np data</p>
      )}
    </>
  );
};

export default Autos;
