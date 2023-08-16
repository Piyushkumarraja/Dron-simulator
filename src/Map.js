import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import L from 'leaflet';
import Routing from './Routing';
const MapComponent = ({latitude, longitude, timeInSeconds}) => {
  const mapRef = useRef();

  return (
    <MapContainer center={[ 17.3850, 78.4867]} zoom={7} style={{height: '100%', width: '100%', position: 'relative'}} ref={mapRef}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Routing latitude={latitude} longitude={longitude}/>
    </MapContainer>
  );
};

export default MapComponent;

