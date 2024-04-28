import { Link } from "react-router-dom";

export const TourCard = ({ tour }) => {
  return (
    <div className="tourCard">
      <Link to={`${tour.id}`}>
        <img src="/dubai.jpg" alt="tour image" />
        <h4>{tour.title}</h4>
        <p>{tour.description}</p>
      </Link>
    </div>
  );
};
