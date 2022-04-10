import { Wrapper } from "@googlemaps/react-wrapper";
import { useEffect, useRef } from "react";

function MapComponent({
    center,
    zoom,
  }: {
    center: google.maps.LatLngLiteral;
    zoom: number;
  }) {
    const ref = useRef();
  
    useEffect(() => {
        new window.google.maps.Map(ref.current, {
        center,
        zoom,
        });
    });

    return <div ref={ref} id="map" />;
}

export const GoogleMap = () => {
    <Wrapper apiKey={"YOUR_API_KEY"}>
        <MapComponent center={undefined} zoom={0} />
    </Wrapper>
}

export default GoogleMap;