import {
  MapContainer,
  TileLayer,
  ZoomControl,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import MarkerIcon from "./MarkerIcon";
import Link from "next/link";
import useFetch from "../lib/fetch";

export default function Map() {
  const surfspots = useFetch("http://localhost:3000/api/");

  return (
    <>
      <StyledMapContainer
        center={[54.434051, 10.318242]}
        zoom={15}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/jarakle/clbpbe5ii000z14msirbrwos5/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamFyYWtsZSIsImEiOiJjbGJtbzlsYXkwNnY3M29yeDZhOGFsZW15In0.RFqqOxiya31Sjc70F1fmFg`}
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        />

        <ZoomControl position="bottomright" />
        {surfspots.map((surfspot) => {
          return (
            <Marker
              position={[surfspot.latitude, surfspot.longitude]}
              key={surfspot.ID}
              ID={surfspot.ID}
              icon={MarkerIcon}
            >
              <Popup keepInView={true}>
                <StyledLink href={surfspot.slug}>
                  <StyledPopupContent>
                    <h1>{surfspot.name}</h1>
                    <p>
                      {surfspot.description}
                      <span></span>
                    </p>
                  </StyledPopupContent>
                </StyledLink>
              </Popup>
            </Marker>
          );
        })}
      </StyledMapContainer>
    </>
  );
}

const StyledMapContainer = styled(MapContainer)`
  height: calc(100vh - 57px) !important;
  width: 100vw;
  margin: 0 auto;
  z-index: 0;
  margin-top: 57px;
`;

const StyledPopupContent = styled.div`
  h1 {
    text-align: center;
    font-weight: 400;
    color: black;
  }
  p {
    color: #787777;
  }
  font-size: medium;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
