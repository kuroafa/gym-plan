import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [isSuccess, setIsSuccess] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url, { method: "GET" });
      const newData = await response.json();

      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }

      if (response.ok) {
        setIsSuccess(true);
        setData(newData);
        setTimeout(() => {
          setIsSuccess(false);
        }, 10000);
      }
    } catch (error) {
      console.error("Error sending request to", url, error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const revalidate = () => {
    fetchData();
  };

  return { data, isLoading, isSuccess, error, revalidate };
};