"use client";
"use client";
import React, { useState, useEffect } from "react";

type Props = {};

const LocalWeather = (props: Props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    try {
      // Get user's current location
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const response = await fetch(
          `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude}%2C${longitude}&units=imperial`, // Add &units=imperial
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "6412e2a07cmsh1691ee415eb0f88p1ce4f7jsnddcc597223b5",
              "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
            },
          }
        );

        const result = await response.json();
        setData(result);
      });
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div>
      {data && (
        <div className="rounded  pl-3 ">
          <h2 className="text-5xl  font-medium">Current Weather</h2> 
          <p className="text-2xl mb-1 font-normal">@{data.location.name}</p>
          <p className="text-3xl font-normal">Temperature: {data.current.temp_f}°F</p>

          <p className="text-3xl font-normal">Condition: {data.current.condition.text}</p>
         
        </div>
      )}
      {error && <p>Error fetching weather data: {error.message}</p>}
    </div>
  );
};

export default LocalWeather;
