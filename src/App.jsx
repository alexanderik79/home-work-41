import React from 'react';
import Auto from './components/Auto';
import AutoSearchBar from './components/AutoSearchBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAutoSearch from './hooks/useAutoSearch';

function App() {
  const { autoId, setAutoId, auto, loading } = useAutoSearch();

  return (
    <div>
      <h1>Auto Catalogue</h1>
      <AutoSearchBar onSearch={setAutoId} loading={loading} />
      <Auto auto={auto} />
      <ToastContainer />
    </div>
  );
}

export default App;