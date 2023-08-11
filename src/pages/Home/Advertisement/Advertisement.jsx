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
    <>
      <div className="text-center py-5 mb-10">
        <h4 className="font-bold py-3 uppercase">Our Services</h4>
        <h2 className="font-bold text-4xl text-orange-500">Our Advertisement</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto w-11/12 px-5 ">
        {adds.map((add) => (
          <AdvertiseCard key={add.Id} add={add}></AdvertiseCard>
        ))}
      </div>
    </>
  );
};

export default Advertisement;
