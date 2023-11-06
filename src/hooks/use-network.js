import { useState, useCallback } from "react";

const useNetwork = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const sendRequest = useCallback(async (networkConfig, next) => {
    setIsLoading(true);
    try {
      const response = await fetch(networkConfig.url, {
        method: networkConfig.method,
        headers: networkConfig.headers,
        body: JSON.stringify(networkConfig.body),
      });
      const data = await response.json();
      setHasError(false);
      next(data);
    } catch (error) {
      setHasError(true);
      console.log(error.message);
    }
    setIsLoading(false);
  }, []);

  return { isLoading, hasError, sendRequest };
};

export default useNetwork;
