// import React, {useState, useEffect} from 'react';
// import "../../App.css";
// import {GoogleMap} from "../GoogleMap.tsx";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";


// // Here we can add views when map will loading or failure
// const render = (status: Status): ReactElement => {
//   if (status === Status.LOADING) return <h3>{status} ..</h3>;
//   if (status === Status.FAILURE) return <h3>{status} ...</h3>;
//   return <></>;
// };


// export function Map() {
//   const key = process.env.REACT_APP_GOOGLE_KEY
//   console.log(key);
//   if (!process.env.REACT_APP_GOOGLE_KEY) {
//     return (
//       <>      
//         <h2>Add google key</h2>
//         <h2>Current key:{key}</h2>
//       </>
//     );
//   }
//   return (
//     <>
//       <Wrapper apiKey={process.env.REACT_APP_GOOGLE_KEY} render={render}>
//         <GoogleMap center={{ lat: 55.753559, lng: 37.609218 }} zoom={11} />
//       </Wrapper>
//     </>
//   );
// }

// export default Map;