import { useEffect, useState } from "react";
import AdvertiseCard from "./AdvertiseCard";

const Advertisement = () => {
  const [adds, setAdd] = useState([]);

  useEffect(() => {
    fetch("/advertisement.json")
      .then((res) => res.json())
      .then((data) => setAdd(data));
  }, []);

  return (
    <div className="py-12 w-11/12 mx-auto">
      <div className="text-center py-5 mb-20">
        <h4 className="font-bold py-3 uppercase">Our Latest Advertisement Company</h4>
        <h2 className="font-bold text-3xl text-orange-500 uppercase">
          Grow up your business like this company
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 ">
        {adds.map((add) => (
          <AdvertiseCard key={add.Id} add={add}></AdvertiseCard>
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
