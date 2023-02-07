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
display: flex;
justify-content: center;
align-items: center;
`

const StyledDiv = styled.div`
margin: 20px;
border-radius: 25px;
background-color: green;
width: 100%;
height: 30vh; 
overflow: hidden;
`