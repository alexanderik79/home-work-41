import React, { useState } from 'react';
import Auto from './components/Auto';
import AutoSearchBar from './components/AutoSearchBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const[autoId, setAutoId] = useState(1)

  return (
    <div>
      <h1>Auto Catalogue</h1>
      <AutoSearchBar onSearch={setAutoId}/>
      <Auto autoId={autoId} />
      <ToastContainer />
    </div>
  );
}

export default App;
