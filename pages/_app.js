import GlobalStyles from "../components/GlobalStyles";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [center, setCenter] = useState([54.434051, 10.318242]);
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} center={center} changeCenter={setCenter} />
    </>
  );
}

export default MyApp;
