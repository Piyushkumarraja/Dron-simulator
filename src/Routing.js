import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from 'react-leaflet/hooks'

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

const Routing = ({ latitude, longitude }) => {
  const map = useMap();

  useEffect(() => {
    if (latitude !== undefined && longitude !== undefined) {
      const str = L.latLng(17.3850, 78.4867);
      const des = L.latLng(latitude, longitude);

      const routingControl = L.Routing.control({
        waypoints: [str, des],
        routeWhileDragging: true,
        lineOptions: {
          styles: [{ color: "#6FA1EC", weight: 4 }],
        },
      }).addTo(map);

      return () => {
        map.removeControl(routingControl);
      };
    }
  }, [map, latitude, longitude]);

  return null;
};

export default Routing;
