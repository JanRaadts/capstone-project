import styled from 'styled-components'
import Script from 'next/script';


export default function WindyForecast({latData, lonData}) {

  const options = {
    key: 'ueW2b7h9O7cDO2BpCB7lPiA8pfjFqPPU', 
    verbose: true,
    lat: latData,
    lon: lonData,
    zoom: 15,
};

setTimeout(() => {
  windyInit(options, windyAPI => {
    const { map } = windyAPI; 
});
}, "1000")

  return (
    <>
    <Script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"></Script>
    <Script src="https://api.windy.com/assets/map-forecast/libBoot.js"></Script>
    
   <StyledContainer>
   <StyledDiv id="windy"></StyledDiv> 
   </StyledContainer>
    </>
  )
}

const StyledContainer = styled.div`
border-radius: 25px !important;
overflow: hidden;
margin: 20px 0 20px 0;
background-color: white;
height: 30vh; 
`

const StyledDiv = styled.div`
width: 100%;
height: 100%;
`