import React from "react";
import "../../App.css";
import { Cards } from "../Cards";
// import {GoogleMap} from "../GoogleMap";

export function Destination() {
  return (
    <>
      <h1 className="card-header">Check out these EPIC Destinations!</h1>
      <Cards />
      {/* <GoogleMap/> */}
    </>
  );
}

export default Destination;