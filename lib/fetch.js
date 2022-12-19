import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [surfspotData, setSurfspotData] = useState([]);
  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setSurfspotData(data);
      } catch (error) {
        console.error(error);
      }
    }
    startFetching();
  }, [url]);
  return surfspotData;
}
