import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./customMap.module.css";
import { Icon } from "leaflet";
import { LocationIcon } from "../../constants/imagesImports";
import { useAppDispatch, useAppSelector } from "../../store/applicationStore";
import { useEffect } from "react";
import { fetchInitialLocation } from "../../contexts/searchContext";

function FlyToLocation({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();

  useEffect(() => {
    if (lat && lng) {
      map.flyTo([lat, lng], map.getZoom(), {
        animate: true,
        duration: 1.5, // Adjust duration for smoother animation
      });
    }
  }, [lat, lng, map]);

  return null;
}

function CustomMap() {
  const { location } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const markers = [
    {
      location: [48.8566, 2.3522],
      popup: "U are here ",
    },
  ];
  const customIcon = new Icon({
    iconUrl: LocationIcon,
    iconSize: [40, 50],
  });

  useEffect(() => {
    dispatch(fetchInitialLocation());
  }, []);
  return (
    <MapContainer
      className={styles["leaflet-cont"]}
      center={[location.lat, location.lng]}
      zoom={13}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <FlyToLocation lat={location.lat} lng={location.lng} />

      {markers.map((m) => (
        <Marker
          position={{
            lat: location.lat,
            lng: location.lng,
          }}
          key={m.location.join("")}
          icon={customIcon}
        >
          <Popup>
            <h1>{m.popup}</h1>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default CustomMap;
