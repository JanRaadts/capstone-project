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

export default function Map({ surfspots }) {
  function onPopup() {
    console.log("test");
  }

  return (
    <>
      <StyledMapContainer
        center={[54.452217, 11.069011]}
        zoom={9}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/jarakle/clbmtjmr7000p14pgicyk8q8k/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamFyYWtsZSIsImEiOiJjbGJtbzlsYXkwNnY3M29yeDZhOGFsZW15In0.RFqqOxiya31Sjc70F1fmFg`}
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
              <Popup keepInView={true} maxHeight={200}>
                <StyledPopupContent onClick={onPopup}>
                  <h1>{surfspot.name}</h1>
                  <p>{surfspot.description}</p>
                </StyledPopupContent>
              </Popup>
            </Marker>
          );
        })}
      </StyledMapContainer>
    </>
  );
}

const StyledMapContainer = styled(MapContainer)`
  height: calc(100vh - 60px) !important;
  width: 100vw;
  margin: 0 auto;
  z-index: 0;
`;

const StyledPopupContent = styled.div`
  h1 {
    text-align: center;
    font-weight: 400;
  }
  font-size: medium;
`;
