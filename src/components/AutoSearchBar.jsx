import React, { useState } from 'react';

const AutoSearchBar = ( {onSearch} ) => {

  const [autoId, setAutoId] = useState(1);


  const handleSearch = () => {
        onSearch(autoId)
    };

  return (

    <>
    <div>
        <input type="number" value={autoId} max={25} min={1} onChange={e => setAutoId(e.target.value)}
/>
        <button onClick={handleSearch}>Search</button>
    </div>
     
    </>
  );
};

export default AutoSearchBar;
