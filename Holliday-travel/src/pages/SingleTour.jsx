import { useParams } from "react-router-dom";
import { tours } from "../utils/data";

const SingleTour = () => {
  const tourId = useParams();

  const singleTour = tours.find((tour) => {
    return tour.id == tourId.tourId;
  });

  return (
    <div>
      {/* <img style={{ width: "50%" }} src={"/dubai.jpg"} alt={singleTour.title} />
      <h4>{singleTour.title}</h4>
      <p>{singleTour.description}</p> */}
    </div>
  );
};

export default SingleTour;
