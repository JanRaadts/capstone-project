import { useState, useEffect } from "react";

const useGeoLocation = () => {
  const [location, setLocation] = useState("error");

  const onSuccess = (location) => {
    setLocation([location.coords.latitude, location.coords.longitude]);
    console.log(location);
  };

  const onError = (error) => {
    setLocation("error");
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeoLocation;
