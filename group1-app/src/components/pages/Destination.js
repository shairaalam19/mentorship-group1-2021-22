import React from "react";
import "../../App.css";
import { Cards } from "../Cards";
// import {GoogleMap} from "./components/GoogleMap";

export function Destination() {
  return (
    <>
    <div className = "destination-wrapper">
      <h1>Check out these EPIC Destinations!</h1>
      {/* this is totally white */}
      <Cards />
      {/* <GoogleMap/> */}
    </div>
    </>
  );
}

export default Destination;