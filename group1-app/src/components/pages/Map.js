import React, {useState, useEffect} from 'react';
import "../../App.css";
<<<<<<< HEAD
import { Cards } from "../Cards";
// import {GoogleMap} from "../GoogleMap.tsx";
// ---> add GoogleMap component after fixing this issue with the @googlemap/react-wrapper pckg
=======
import {GoogleMap} from "../GoogleMap.tsx";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

// Here we can add views when map will loading or failure
const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return <></>;
};

>>>>>>> 2b26d01729247bb19e47e068d01bc18b9bd2a7e4

export function Map() {
  const key = process.env.REACT_APP_GOOGLE_KEY
  console.log(key);
  if (!process.env.REACT_APP_GOOGLE_KEY) {
    return (
      <>      
        <h2>Add google key</h2>
        <h2>Current key:{key}</h2>
      </>
    );
  }
  return (
    <>
<<<<<<< HEAD
      <Cards />
=======
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_KEY} render={render}>
        <GoogleMap center={{ lat: 55.753559, lng: 37.609218 }} zoom={11} />
      </Wrapper>
>>>>>>> 2b26d01729247bb19e47e068d01bc18b9bd2a7e4
    </>
  );
}

export default Map;