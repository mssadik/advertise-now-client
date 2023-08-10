const AdvertiseCard = ({add}) => {
    const{Name, Category, Description, Price, Image} = add
    console.log(add);

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={Image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Name}</h2>
          <p>{Description}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-orange-500 text-white">View Details</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default AdvertiseCard;