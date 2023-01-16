import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "react-map-gl";
import styled from "styled-components";
import Link from "next/link";
import Header from "./Header";
import Image from "next/image";
import addNewSpotBtn from "../public/images/addSpotButton.svg";
import marker from "../public/images/mapBoxMarkerRound.svg";
import markerRound from "../public/images/markerRound.svg";
import PopUp from "./PopUp";

export default function NewMap({
  center,
  changeCenter,
  zoom,
  changeZoom,
  surfspots,
  selectedSpot,
  setSelectedSpot,
  setShowPopUp,
  showPopUp,
}) {
  const router = useRouter();
  const GEO_API = process.env.NEXT_PUBLIC_GEO_KEY;
  const mapRef = useRef(0);

  const [usedLocateMe, setUsedLocateMe] = useState(false);

  const [usedSearchAround, setUsedSearchAround] = useState(false);

  function handleMapShown() {
    router.push(`/countries`);
    savePosition();
  }

  function handleLocateMe() {
    const onSuccess = (position) => {
      const loc = [position.coords.longitude, position.coords.latitude];
      mapRef.current.flyTo({
        center: loc,
        zoom: 12,
        essential: false,
      });
      setUsedLocateMe(true);
      setUsedSearchAround(false);
    };

    const onError = () => {
      alert("standort nicht gefunden");
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }

  function handleSearchAround(data) {
    getGeo(data);
    setUsedSearchAround(true);
    setUsedLocateMe(false);
  }

  async function getGeo(data) {
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/search?text=${data}&format=json&apiKey=${GEO_API}`
    );
    const geodata = await response.json();
    const lat = `${geodata.results[0].lat}`;
    const long = `${geodata.results[0].lon}`;

    mapRef.current.flyTo({
      center: [long, lat],
      zoom: 12,
      essential: false,
    });
  }
  function savePosition() {
    const lat = mapRef.current.getCenter().lat.toFixed(4);
    const lng = mapRef.current.getCenter().lng.toFixed(4);
    changeCenter([lat, lng]);
    changeZoom(mapRef.current.getZoom().toFixed(2));
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
      <StyledMapContainer>
        <Map
          ref={mapRef}
          mapboxAccessToken="pk.eyJ1IjoiamFyYWtsZSIsImEiOiJjbGJtbzlsYXkwNnY3M29yeDZhOGFsZW15In0.RFqqOxiya31Sjc70F1fmFg"
          initialViewState={{
            longitude: `${center[1]}`,
            latitude: `${center[0]}`,
            zoom: zoom,
          }}
          mapStyle="mapbox://styles/jarakle/clbpbe5ii000z14msirbrwos5"
        >
          {surfspots.map((surfspot) => {
            return (
              <Marker
                longitude={surfspot.longitude}
                latitude={surfspot.latitude}
                mapboxAccessToken="pk.eyJ1Ijoiam9uYXRzdWppIiwiYSI6ImNsY3Jpamc3MjAxNXYzcG14ZWhsZjJpcTkifQ.J65lhDbm_-LV0-exyyKFlA"
                key={surfspot._id}
                anchor="bottom"
              >
                <StyledButton
                  onClick={(event) => {
                    event.preventDefault();
                    setSelectedSpot(surfspot);
                    setShowPopUp(!showPopUp);
                    mapRef.current.flyTo({
                      center: [surfspot.longitude, surfspot.latitude],
                      zoom: 12,
                      essential: false,
                    });
                    changeZoom(12);
                    changeCenter([surfspot.latitude, surfspot.longitude]);
                  }}
                >
                  <Image
                    src={markerRound}
                    alt="Marker auf der Karte"
                    width={33}
                    height={33}
                  />
                </StyledButton>
              </Marker>
            );
          })}
          {showPopUp ? (
            <PopUp
              slug={selectedSpot.slug}
              name={selectedSpot.name}
              image={selectedSpot.image}
              description={selectedSpot.description}
              setShowPopUp={setShowPopUp}
            />
          ) : null}
        </Map>
      </StyledMapContainer>
    </>
  );
}

const StyledMapContainer = styled.div`
  position: absolute;
  top: 0;
  height: calc(100svh - 57px);
  width: 100vw;
  margin: 0 auto;
  z-index: 0;
  margin-top: 57px;
`;

const StyledAddSpotBtn = styled(Link)`
  z-index: 4;
  position: absolute;
  bottom: 30px;
  left: 10px;
`;

const StyledButton = styled.button`
  background: rgba(120, 119, 119, 0);
  border: none;
`;
