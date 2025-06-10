import React, { useEffect, useState } from 'react';
import { AutoContainer, AutoImage, AutoTitle, AutoText } from './Autos.styles';

import axios from 'axios';
import { toast } from 'react-toastify';

import api from '../axiosConfig';

const Autos = ({ autoId }) => {
  const apiKey = '0190ed4a-9d93-4b55-ac50-96123dbc39e6';
  const company = 'AutoPlus';



  const [auto, setAuto] = useState();

  useEffect(() => {
        const toastId = toast.loading('Loading...');

    api.get(`/products/product/${autoId}/${company}`)

      .then(response => {
        setAuto(response.data); 
      
      toast.update(toastId, {
          render: 'Done!',
          type: 'success',
          isLoading: false,
          autoClose: 2000,
             });
        })
        .catch(error => {
        toast.update(toastId, {
            render: 'Car not found.',
            type: 'warn',
            isLoading: false,
            autoClose: 3000,
        });
        });
}, [autoId]);

  return (

    <>
  {auto ? (
    <AutoContainer>
      <AutoTitle>{auto.name}</AutoTitle>
      <AutoText>{auto.description}</AutoText>
      <AutoText>Price: ${auto.price}</AutoText>
      <AutoText>Trade: {auto.make}</AutoText>
      <AutoText>Model: {auto.model}</AutoText>
      <AutoText>Year: {auto.year}</AutoText>
      <AutoImage src={auto.photoList?.[0]} alt={auto.name} />
    </AutoContainer>
  ) : (
    <p>No data</p>
  )}
</>


    // <>
    //   {auto ? (
    //     <div>
    //       <h2>{auto.name}</h2>
    //       <p>{auto.description}</p>
    //       <p>Price: ${auto.price}</p>
    //       <p>Trade: {auto.make}</p>
    //       <p>Model: {auto.model}</p>
    //       <p>Year: {auto.year}</p>
    //       <img src={auto.photoList?.[0]} alt={auto.name} width={300} />
    //     </div>
    //   ) : (
    //     <p>Np data</p>
    //   )}
    // </>
  );
};

export default Autos;
