import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
const AdvertiseCard = ({ add }) => {
  const { id, company, advertisement,  } = add;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl border border-b-0 border-t-orange-200 border-r-orange-100 border-l-orange-100">
        <figure>
          <img src={company.logo_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{company.name}</h2>
          <p className="py-2 text-justify">{advertisement.description}</p>
          <div className="card-actions justify-between items-center">
            <h4 className="font-semibold">
              <Rating
                className="text-yellow-400"
                style={{ maxWidth: 100 }}
                value={advertisement.reviews[0].rating}
                readOnly
              />
            </h4>

            <Link
              to={`/cardDetails/${id}`}
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
