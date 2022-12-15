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
  return (
    <>
      <StyledMapContainer
        center={[54.452217, 11.069011]}
        zoom={9}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/jarakle/clbmsc8mz000w14o4oil6s70z/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamFyYWtsZSIsImEiOiJjbGJtbzlsYXkwNnY3M29yeDZhOGFsZW15In0.RFqqOxiya31Sjc70F1fmFg`}
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
              <Popup>Coming soon...</Popup>
            </Marker>
          );
        })}
      </StyledMapContainer>
    </>
  );
}

const StyledMapContainer = styled(MapContainer)`
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  z-index: 0;
`;
