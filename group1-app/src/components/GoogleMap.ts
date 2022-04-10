// import { Wrapper } from "@googlemaps/react-wrapper";

// const render = (status: Status): ReactElement => {
//     if (status === status.FAILURE) return <ErrorComponent />;
//     return <Spinner />;
//   };

// export const GoogleMap = () => (
//   <Wrapper apiKey={"YOUR_API_KEY"}>
//     <MapComponent />
//   </Wrapper>
// );

// function MapComponent({
//     center,
//     zoom,
//   }: {
//     center: google.maps.LatLngLiteral;
//     zoom: number;
//   }) {
//     const ref = useRef();
  
//     useEffect(() => {
//       new window.google.maps.Map(ref.current, {
//         center,
//         zoom,
//       });
//     });
  
//     return <div ref={ref} id="map" />;
//   }

// export default GoogleMap;