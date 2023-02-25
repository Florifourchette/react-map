import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const Maps = ({ lat, long }) => {
  return (
    <MapContainer center={[lat, long]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, long]}></Marker>
    </MapContainer>
  );
};

export default Maps;
