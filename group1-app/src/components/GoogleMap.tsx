import { useEffect, useRef, useState } from "react";
// we will use make styles for styling components, you can use another solutions (like css, sass or cssonjs
import { makeStyles } from "@material-ui/core";
// api mock data
import Apartments from "./apartments.ts";

// Our component will receive center coords and zoom size in props
type MapProps = {
  center: google.maps.LatLngLiteral
  zoom: number
}

// map wrapper styles
const useStyles = makeStyles({
  map: {
    height: '100vh'
  }
})

export function GoogleMap({ center, zoom }: MapProps) {
  const ref = useRef(null);
  const [map, setMap] = useState<google.maps.Map<Element> | null>(null)
  const classes = useStyles();

  useEffect(() => {
    // we need to save google-map object for adding markers and routes in future
    if (ref.current) {
      // here will connect map frame to div element in DOM by using ref hook
      let createdMap = new window.google.maps.Map(
        ref.current,
        {
          center,
          zoom,
          disableDefaultUI: true,
          clickableIcons: false
        }
      );
      setMap(createdMap)
    }
  }, [center, zoom]);

  // map will be connect to this div block
  return <div ref={ref} id="map" className={classes.map} />;
}

export default GoogleMap;