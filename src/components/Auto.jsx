import React from 'react';
import { AutoContainer, AutoImage, AutoTitle, AutoText } from './Auto.styles';

const Auto = ({ auto }) => {
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

export default Auto;