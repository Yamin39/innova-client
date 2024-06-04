import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRef } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import markerImg from "../../../assets/images/marker.png";

const markerIcon = new L.Icon({
  iconUrl: markerImg,
  iconSize: [52, 52],
  iconAnchor: [17, 46],
});

const Location = () => {
  const center = { lat: 24.89498791738604, lng: 91.86864367612459 };
  const ZOOM_LEVEL = 15;
  const mapRef = useRef();
  return (
    <div className="my-12 md:my-24">
      <div className="text-center mb-10">
        <h1 className="text-[3rem] sm:text-[3.45rem] lg:text-5xl font-bold mt-4">Hotel&apos;s location</h1>
        <p className="sm:max-w-[25rem] mx-auto text-gray-500 mt-2">Find our hotel location in map</p>
      </div>
      <div>
        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
          <TileLayer
            url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=OSzxQL3KxOWnqtdNrmsD"
            attribution={`&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`}
          />
          <Marker position={[24.895170106743933, 91.86841927794073]} icon={markerIcon}></Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Location;
