import { useState, useRef, useEffect } from "react";
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
import useGeoLocation from "./Hooks/useGeoLocation";
import Image from "next/image";
import locateMeButton from "../public/images/locateMeButton.png";

export default function Map() {
  const mapRef = useRef(0);
  const surfspots = useFetch("/api");
  const [center, setCenter] = useState([54.434051, 10.318242]);
  const myLocation = useGeoLocation();

  function handleSetView() {
    if (myLocation == "error") {
      alert("standort nicht gefunden");
    } else {
      const { current = {} } = mapRef;
      const map = current;
      map.flyTo(myLocation);
    }
  }

  return (
    <>
      <StyledMapContainer
        ref={mapRef}
        center={center}
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
              key={surfspot._id}
              ID={surfspot._id}
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
      <StyledPositionBtn onClick={handleSetView}>
        <Image
          src={locateMeButton}
          alt="locate my position"
          width={40}
          height={40}
        ></Image>
      </StyledPositionBtn>
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

const StyledPositionBtn = styled.button`
  position: absolute;
  top: 80px;
  left: 10px;
  z-index: 1;
  background: rgba(255, 255, 255, 0);
  border: none;
`;
