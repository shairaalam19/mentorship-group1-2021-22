import { Wrapper, Status } from "@googlemaps/react-wrapper"; // can't find this!
import { useEffect, useRef, ReactElement } from "react";

const render = (status: Status): ReactElement =>{
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ..</h3>;
  if (status === Status.SUCCESS) return <h3>{status} ..</h3>;
  return null;
}
  //return <MapComponent center={{ lat: -34.397, lng: 150.644 }} zoom={8} />;

function MapComponent({
    center,
    zoom,
  }: {
    center: google.maps.LatLngLiteral;
    zoom: 8;
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
 export function GoogleMap() {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 8;
  return (
    <Wrapper apiKey = {"mentormap"} render={render}>
      <MapComponent center={center} zoom={zoom} />
    </Wrapper>
  );
}
// export const GoogleMap = () => {
//     <Wrapper apiKey={"mentormap"}>
//         <MapComponent center={undefined} zoom={8} />
//     </Wrapper>
// }

export default GoogleMap;
