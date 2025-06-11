import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../axiosConfig';

const useAutoSearch = () => {
  const [autoId, setAutoId] = useState(1);
  const [auto, setAuto] = useState(null);
  const [loading, setLoading] = useState(false);
  const company = 'AutoPlus';

  useEffect(() => {
    const fetchAuto = () => {
      const toastId = toast.loading('Loading...');
      setLoading(true);

      api.get(`/products/product/${autoId}/${company}`)
        .then(response => {
          setAuto(response.data);
          toast.update(toastId, {
            render: 'Done!',
            type: 'success',
            isLoading: false,
            autoClose: 1500
          });
        })
        .catch(() => {
          setAuto(null);
          toast.update(toastId, {
            render: 'Car not found.',
            type: 'warn',
            isLoading: false,
            autoClose: 3000
          });
        })
        .finally(() => setLoading(false));
    };

    fetchAuto();
  }, [autoId]);

  return { autoId, setAutoId, auto, loading };
};

export default useAutoSearch;