import { DetailsMainTypes } from "@/types/types";
import "../styles/card-home.css";

const CardHome = ({ item }: {item: DetailsMainTypes})=> {
  return (
    <div className="container-card-details">
      <div className="card-details-text">
        <h3 className="card-details-title">{item.title}</h3>
        <p className="card-details-desc">{item.description}</p>
      </div>
    </div>
  );
};

export default CardHome;
