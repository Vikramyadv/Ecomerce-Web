"use client";
import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          setLocation((prevLocation) => ({
            ...prevLocation,
            error: error.message || "Unknown error",
          }));
        }
      );
    } else {
      setLocation((prevLocation) => ({
        ...prevLocation,
        error: "Geolocation is not supported by this browser.",
      }));
    }
  }, []);

  return location;
};

export default useGeolocation;
