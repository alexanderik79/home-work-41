import React, { useEffect, useState } from 'react';
import { AutoContainer, AutoImage, AutoTitle, AutoText } from './Auto.styles';

import { toast } from 'react-toastify';

import api from '../axiosConfig';

const Autos = ({ autoId }) => {
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
  );
};

export default Autos;
