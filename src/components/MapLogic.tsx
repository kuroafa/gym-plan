import React, { useState, useEffect, useMemo } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;
type Props = {};

const defaultOptions = {
  strikeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};

const MapLogic = (props: Props) => {
  const [userLocation, setUserLocation] = useState<LatLngLiteral | null>(null);
  const center = useMemo<LatLngLiteral>(() => ({ lat: 43, lng: -80 }), []);
  const options = useMemo<MapOptions>(
    () => ({
      mapId: "3282bd7b0b1627dc",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  useEffect(() => {
    // Check if Geolocation API is available in the browser
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Get user's latitude and longitude
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);

  return (
    <div>
       <h2 className="text-xl font-medium mb-1">Nearby Gyms (coming soon)</h2>
      <div className="grid grid-cols-1 gap-5 h-[250px] rounded-2xl">
      
        <div className="lg:col-span-2">
         
          <GoogleMap
            zoom={10}
            center={userLocation || center}
            mapContainerClassName="h-full w-full rounded-2xl"
            options={options}
          >
            {userLocation && <Marker position={userLocation} />}
          </GoogleMap>
        </div>
      </div>
    </div>
  );
};

export default MapLogic;
