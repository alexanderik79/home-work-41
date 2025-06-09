import React, { useState } from 'react';
import Autos from './components/Autos';
import AutoSearchBar from './components/AutoSearchBar';

function App() {

  const[autoId, setAutoId] = useState(1)

  return (
    <div>
      <h1>Auto Catalogue</h1>
      <AutoSearchBar onSearch={setAutoId}/>
      <Autos autoId={autoId} />
    </div>
  );
}

export default App;
