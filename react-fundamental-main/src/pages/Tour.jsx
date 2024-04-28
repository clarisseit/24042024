import { useContext } from "react";
import { TourCard } from "../components/TourCard";
import { AppContext } from "../App";
import { tours } from "../utils/data";

const TourList = () => {
  const { toursData } = useContext(AppContext);

  return (
    <>
      <div className="tours">
        {toursData.map((item) => {
          return <TourCard key={item.id} tour={item} />;
        })}
      </div>
    </>
  );
};
const Tour = () => {
  const { loggedUser } = useContext(AppContext);
  return (
    <div>
      <h1>{loggedUser.name}</h1>
      <TourList />
    </div>
  );
};

export default Tour;
