import React, { useState } from 'react';

const AutoSearchBar = ( {onSearch} ) => {

  const [autoId, setAutoId] = useState(1);


  const handleSearch = () => {
        onSearch(autoId)
    };

  const handleInputChange = (e) => {
      setAutoId(e.target.value)  
  } ; 

  return (

    <>
    <div>
        <input type="number" value={autoId} min={1} onChange={handleInputChange}/>
        <button onClick={handleSearch}>Search</button>
    </div>
    </>
  );
};

export default AutoSearchBar;
