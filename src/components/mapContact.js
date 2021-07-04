import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, Point } from 'leaflet';

const mapValidation = () => {
  if (typeof window !== 'undefined') {
       return(
        <MapContainer center={[50.04313, 19.99360]} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            icon={new Icon({
              iconUrl: require("../img/marker.png"),
              iconRetinaUrl: require("../img/marker.png"),
              iconAnchor: [20, 40],
              popupAnchor: [0, -40],
              iconSize: new Point(40, 40),
              className: "leaflet-div-icon",
            })}
            position={[50.04313, 19.99350]}
          >
            <Popup>
              Smart Hydro, zapraszamy!
            </Popup>
          </Marker>
        </MapContainer>
       ) 
  }
}

const MapContact = () => {
  return (<>
    {mapValidation()}
  </>);
}

export default MapContact;