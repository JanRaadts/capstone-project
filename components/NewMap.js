import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "react-map-gl";
import styled from "styled-components";
import Link from "next/link";
import Header from "./Header";
import Image from "next/image";
import addNewSpotBtn from "../public/images/addSpotButton.svg";
import closeButton from "../public/images/closeButton.svg";
import marker from "../public/images/mapBoxMarker.svg";

export default function NewMap({
  center,
  changeCenter,
  zoom,
  changeZoom,
  surfspots,
}) {
  const router = useRouter();
  const GEO_API = process.env.NEXT_PUBLIC_GEO_KEY;
  const mapRef = useRef(0);

  const [usedLocateMe, setUsedLocateMe] = useState(false);

  const [usedSearchAround, setUsedSearchAround] = useState(false);

  function handleMapShown() {
    router.push(`/countries`);
  }

  function handleLocateMe() {
    navigator.geolocation.getCurrentPosition((position) => {
      let newViewport = {
        height: "100vh",
        width: "100vw",
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 12,
      };
      const loc = [newViewport.longitude, newViewport.latitude];
      mapRef.current.flyTo({
        center: loc,
        zoom: 12,
        essential: false,
      });
    });
    setUsedLocateMe(true);
    setUsedSearchAround(false);
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

  useEffect(() => {
    if (!mapRef.current) return;
    mapRef.current.on("move", () => {
      const lat = mapRef.current.getCenter().lat.toFixed(4);
      const lng = mapRef.current.getCenter().lng.toFixed(4);
      changeCenter([lat, lng]);
      changeZoom(mapRef.current.getZoom().toFixed(2));
    });
  });

  const [selectedSpot, setSelectedSpot] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);

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
      {!showPopUp ? (
        <StyledAddSpotBtn href={"/addspot"}>
          <Image src={addNewSpotBtn} alt="addSpot" width={50} height={50} />
        </StyledAddSpotBtn>
      ) : null}

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
                  }}
                >
                  <Image
                    src={marker}
                    alt="Marker auf der Karte"
                    width={48}
                    height={48}
                  />
                </StyledButton>
              </Marker>
            );
          })}
          {showPopUp ? (
            <>
              <StyledPopUpContainer>
                <StyledPopUp>
                  <StyledLink href={selectedSpot.slug}>
                    <StyledPopupContent>
                      <h1>{selectedSpot.name}</h1>
                      <p>{`${selectedSpot.description.slice(0, 150)}...`}</p>
                    </StyledPopupContent>
                  </StyledLink>

                  <StyledCloseButton
                    onClick={() => {
                      setShowPopUp(false);
                    }}
                  >
                    <Image
                      src={closeButton}
                      alt="Button um das Pop-Up zu schließen"
                      width={35}
                      height={35}
                    />
                  </StyledCloseButton>
                </StyledPopUp>
              </StyledPopUpContainer>
            </>
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledAddSpotBtn = styled(Link)`
  z-index: 4;
  position: absolute;
  bottom: 30px;
  left: 10px;
`;

const StyledPopUpContainer = styled.div`
  width: 100vw;
  height: calc(100svh - 57px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPopUp = styled.div`
  margin: 1rem;
  z-index: 4;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 90vw;
  height: 30vh;
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px;
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

const StyledButton = styled.button`
  background: rgba(120, 119, 119, 0);
  border: none;
`;

const StyledCloseButton = styled.button`
  background: rgba(120, 119, 119, 0);
  border: none;
  position: absolute;
  right: 10px;
  top: 10px;
`;
