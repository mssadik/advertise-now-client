/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AdvertiseCard = ({ add }) => {
  const { name, description, image, ratings } = add;
  
  return (
    <div>
      <div className="card bg-base-100 shadow-xl border border-r-0 border-b-0 border-l-0 border-t-orange-500">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{name}</h2>
          <p className="py-2 text-justify">{description}</p>
          <div className="card-actions justify-between items-center">
            <h4 className="font-semibold">Ratings : {ratings}</h4>
            <Link
              to={"./cardDetails"}
              className="btn bg-orange-500 text-white hover:text-orange-500 hover:border hover:border-orange-500 hover:bg-white"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseCard;
