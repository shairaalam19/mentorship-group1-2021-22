// import { useEffect, useRef, useState } from "react";
// // we will use make styles for styling components, you can use another solutions (like css, sass or cssonjs
// import { makeStyles } from "@material-ui/core";
// // api mock data
// import Apartments from "./apartments.js";

// // Our component will receive center coords and zoom size in props
// type MapProps = {
//   center: google.maps.LatLngLiteral
//   zoom: number
// }

// // map wrapper styles
// const useStyles = makeStyles({
//   map: {
//     height: '100vh'
//   }
// })

// export function GoogleMap({ center, zoom }: MapProps) {
//   const ref = useRef(null);
//   const [map, setMap] = useState<google.maps.Map<Element> | null>(null)
//   const classes = useStyles();

//   useEffect(() => {
//     // we need to save google-map object for adding markers and routes in future
//     if (ref.current) {
//       // here will connect map frame to div element in DOM by using ref hook
//       let createdMap = new window.google.maps.Map(
//         ref.current,
//         {
//           center,
//           zoom,
//           disableDefaultUI: true,
//           clickableIcons: false
//         }
//       );
//       setMap(createdMap)
//     }
//   }, [center, zoom]);

//   // map will be connect to this div block
//   return <div ref={ref} id="map" className={classes.map} />;
// }
// // export const GoogleMap = () => {
// //     <Wrapper apiKey={"mentormap"}>
// //         <MapComponent center={undefined} zoom={8} />
// //     </Wrapper>
// // }

// export default GoogleMap;
// // import { Wrapper, Status } from "@googlemaps/react-wrapper";
// // import { useEffect, useRef, ReactElement } from "react";

// // const render = (status: Status): ReactElement =>{
// //   if (status === Status.LOADING) return <h3>{status} ..</h3>;
// //   if (status === Status.FAILURE) return <h3>{status} ..</h3>;
// //   if (status === Status.SUCCESS) return <h3>{status} ..</h3>;
// //   return null;
// // }
// //   //return <MapComponent center={{ lat: -34.397, lng: 150.644 }} zoom={8} />;

// // function MapComponent({
// //     center,
// //     zoom,
// //   }: {
// //     center: google.maps.LatLngLiteral;
// //     zoom: 8;
// //   }) {
// //     const ref = useRef();
  
// //     useEffect(() => {
// //         new window.google.maps.Map(ref.current, {
// //         center,
// //         zoom,
// //         });
// //     });

// //     return <div ref={ref} id="map" />;
// // }
// //  export function GoogleMap() {
// //   const center = { lat: -34.397, lng: 150.644 };
// //   const zoom = 8;
// //   return (
// //     <Wrapper apiKey = {"mentormap"} render={render}>
// //       <MapComponent center={center} zoom={zoom} />
// //     </Wrapper>
// //   );
// // }
// // // export const GoogleMap = () => {
// // //     <Wrapper apiKey={"mentormap"}>
// // //         <MapComponent center={undefined} zoom={8} />
// // //     </Wrapper>
// // // }

// // export default GoogleMap;
