import { Link } from "react-router-dom";

const CardDetails = () => {

  return (
    <>
      <div className=" bg-base-200 p-10">
        <h2 className="text-center font-bold text-3xl py-10 text-orange-500 uppercase">
          Details Information Of Our Process
        </h2>
        <div className="card lg:card-side bg-white shadow-xl rounded-xl p-10">
          <div className="w-1/2">
            <figure>
              <img src="welcome.jpg" alt="Album" className="rounded-xl" />
            </figure>
          </div>
          <div className="card-body w-1/2">
            <h2 className="text-3xl font-bold text-orange-500 capitalize py-10">We will add details for your company advertisement.</h2>
            <Link to={'/'} className="btn border border-orange-500 bg-orange-500 text-white hover:bg-white hover:text-orange-500 hover:border-orange-500">Back</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
