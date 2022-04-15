import React from "react";
import "../../App.css";
import { Cards } from "../Cards";
// import {GoogleMap} from "../GoogleMap.tsx";
// ---> add GoogleMap component after fixing this issue with the @googlemap/react-wrapper pckg

export function Map() {
  return (
    <>
      <Cards />
    </>
  );
}

export default Map;