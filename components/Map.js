import { useState, useRef } from "react";
import { useRouter } from "next/router";
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
import useGeoLocation from "./Hooks/useGeoLocation";
import Header from "./Header";
import Image from "next/image";
import addNewSpotBtn from "../public/images/addSpotButton.svg";

export default function Map({
  center,
  changeCenter,
  zoom,
  changeZoom,
  surfspots,
}) {
  const mapRef = useRef(0);
  const myLocation = useGeoLocation();

  const [usedLocateMe, setUsedLocateMe] = useState(false);

  const [usedSearchAround, setUsedSearchAround] = useState(false);

  function handleMapShown() {
    router.push(`/countries`);
    const { current = {} } = mapRef;
    const map = current;
    const coordinates = map.getCenter();
    const zoom = map.getZoom();
    changeCenter([coordinates.lat, coordinates.lng]);
    changeZoom(zoom);
  }

  function handleLocateMe() {
    handleSetView();
  }

  const router = useRouter();

  function handleSetView() {
    if (myLocation == "error") {
      alert("standort nicht gefunden");
    } else {
      const { current = {} } = mapRef;
      const map = current;
      const zoom = map.getZoom();
      map.setView(myLocation);
      changeZoom(zoom);
      setUsedLocateMe(true);
      setUsedSearchAround(false);
    }
  }

  function handleSearchAround(data) {
    getGeo(data);
    setUsedSearchAround(true);
    setUsedLocateMe(false);
  }

  async function getGeo(data) {
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/search?text=${data}&format=json&apiKey=e9e1604216e7465488692640e2190af5`
    );
    const geodata = await response.json();
    const lat = `${geodata.results[0].lat}`;
    const long = `${geodata.results[0].lon}`;
    const { current = {} } = mapRef;
    const map = current;
    map.setView([lat, long]);
    const zoom = map.getZoom();
    changeZoom(zoom);
  }

  function handleNewSpotBtnClick() {
    const { current = {} } = mapRef;
    const map = current;
    const coordinates = map.getCenter();
    const zoom = map.getZoom();
    changeCenter([coordinates.lat, coordinates.lng]);
    changeZoom(zoom);
  }

  return (
    <>
      <Header
        onMapShown={handleMapShown}
        onLocateMe={handleLocateMe}
        usedLocateMe={usedLocateMe}
        usedMapShown={true}
        usedSearchAround={usedSearchAround}
        onSearchAround={handleSearchAround}
      />
      <StyledAddSpotBtn href={"/addspot"} onClick={handleNewSpotBtnClick}>
        <Image src={addNewSpotBtn} alt="addSpot" width={50} height={50} />
      </StyledAddSpotBtn>
      <StyledMapContainer
        ref={mapRef}
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/jarakle/clbpbe5ii000z14msirbrwos5/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamFyYWtsZSIsImEiOiJjbGJtbzlsYXkwNnY3M29yeDZhOGFsZW15In0.RFqqOxiya31Sjc70F1fmFg`}
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        {surfspots.map((surfspot) => {
          return (
            <Marker
              position={[surfspot.latitude, surfspot.longitude]}
              key={surfspot._id}
              ID={surfspot._id}
              icon={MarkerIcon}
            >
              <Popup keepInView={true}>
                <StyledLink
                  href={surfspot.slug}
                  onClick={() =>
                    changeCenter([surfspot.latitude, surfspot.longitude])
                  }
                >
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

const StyledAddSpotBtn = styled(Link)`
  z-index: 4;
  position: absolute;
  bottom: 30px;
  left: 10px;
`;
