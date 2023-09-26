"use client";
import React, { useState, useEffect } from "react";

type Props = {};

const LocalWeather = (props: Props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [hasFetched, setHasFetched] = useState(false); // Add a flag to track if data has been fetched

  const fetchWeather = async () => {
    try {
      // Get user's current location
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const headers = new Headers({
          "X-RapidAPI-Key": process?.env.X_RAPID_API_KEY || "",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        });
        const response = await fetch(
          `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude}%2C${longitude}&units=imperial`,
          {
            method: "GET",
            headers: headers,
          }
        );

        const result = await response.json();
        setData(result);
        setHasFetched(true); // Set the flag to true after data is fetched
      });
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (!hasFetched) {
      fetchWeather(); // Fetch data only if it hasn't been fetched yet
    }
  }, [hasFetched]); // Add hasFetched as a dependency

  return (
    <div>
      {data ? (
        <div className="rounded  pl-3 ">
          <h2 className="text-5xl  font-medium">Current Weather</h2>
          <p className="text-2xl mb-1 font-normal">
            @{data.location && data.location.name}
          </p>
          <p className="text-3xl font-normal">
            Temperature: {data.current && data.current.temp_f}°F
          </p>

          <p className="text-3xl font-normal">
            Condition: {data.current && data.current.condition.text}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {error && <p>Error fetching weather data: {error.message}</p>}
    </div>
  );
};

export default LocalWeather;
