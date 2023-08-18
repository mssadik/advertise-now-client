import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
const AdvertiseCard = ({ add }) => {
  const { _id, logo_url, name, description, rating } = add;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl border border-b-0 border-t-orange-200 border-r-orange-100 border-l-orange-100">
        <figure>
          <img src={logo_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{name}</h2>
          <p className="py-2 text-justify">{description}</p>
          <div className="card-actions justify-between items-center">
            <h4 className="font-semibold">
              <Rating
                className="text-yellow-400"
                style={{ maxWidth: 100 }}
                value={rating}
                readOnly
              />
            </h4>

            <Link
              to={`/cardDetails/${_id}`}
              className="btn bg-orange-500 text-white hover:text-orange-500 hover:border hover:border-orange-500 hover:bg-white"
            >
              Company Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdvertiseCard;
