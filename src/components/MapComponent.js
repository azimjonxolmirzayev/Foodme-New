import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { FaMapMarkerAlt } from "react-icons/fa"; // React Icons
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";

function MapComponent({ onAddressSelect }) {
  const [position, setPosition] = useState(null);
  const [coords, setCoords] = useState({ lat: null, lng: null });
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]);
          setCoords({ lat: latitude, lng: longitude });
          fetchAddress(latitude, longitude);
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const fetchAddress = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      );
      const data = await response.json();
      setAddress(data.display_name);
      onAddressSelect(data.display_name); // Pass address to parent component
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  function LocationMarker() {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
        setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
        fetchAddress(e.latlng.lat, e.latlng.lng);
      },
    });

    const customIcon = L.divIcon({
      className: "custom-icon",
      html: renderToStaticMarkup(
        <div style={{ fontSize: "24px", color: "red" }}>
          <FaMapMarkerAlt size={24} />
        </div>
      ),
      iconSize: [30, 30],
    });

    return position === null ? null : (
      <Marker
        position={position}
        icon={customIcon}
        eventHandlers={{
          add: (e) => {
            e.target.openPopup();
          },
        }}
      >
        <Popup>{address || "Loading address..."}</Popup>
      </Marker>
    );
  }

  return (
    <div>
      <MapContainer
        center={position || [41.111975463118746, 72.06808841225212]}
        zoom={13}
        style={{
          height: "50vh",
          width: "100%",
          borderRadius: "15px",
          marginTop: "25px",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default MapComponent;
