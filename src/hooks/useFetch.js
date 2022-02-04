import { useEffect, useState } from 'react';
import { publicRequest } from '../tools/requestMethod';

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(url);

        setApiData(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };

    getProduct();
  }, [url]);

  return {
    isLoading,
    apiData,
    error,
  };
};

export default useFetch;
