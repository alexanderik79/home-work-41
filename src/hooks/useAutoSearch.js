import { useState } from 'react';

const useAutoSearch = () => {
  const [autoId, setAutoId] = useState(1);
  const [loading, setLoading] = useState(false);

  return { autoId, setAutoId, loading, setLoading };
};

export default useAutoSearch;