import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";

function Pin({ item }) {
  const icon = new L.Icon({
    iconUrl: "./mark.png",
    iconSize: [35, 35],
    iconAnchor: [12, 30],
    popupAnchor: [1, -34]
  });
  return (
    <Marker position={[item.latitude, item.longitude]} icon={icon}>
      <Popup>
        <div className="popupContainer">
          <img src={item.images[0]} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>Rs. {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
