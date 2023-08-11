import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    fetch("feedback.json")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, []);

  const slides = [];
  for (let i = 0; i < feedbacks.length; i += 2) {
    const feedback1 = feedbacks[i];
    const feedback2 = feedbacks[i + 1];
    slides.push(
      <SwiperSlide key={i}>
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 mx-4 md:mx-24 my-16">
          {feedback1 && (
            <div className="text-center bg-gradient-to-b from-black to-indigo-600 p-8 rounded-lg shadow-lg">
              <img
                className="w-28 h-28 rounded-full mx-auto mb-4 border-2 border-orange-400"
                src={feedback1.img}
                alt=""
              />
              <h3 className="text-3xl text-white">{feedback1.clientName}</h3>
              <div className=" mt-2">
                <Rating
                  className="text-yellow-400 mx-auto"
                  style={{ maxWidth: 180 }}
                  value={feedback1.rating}
                  readOnly
                />
              </div>
              <p className="text-white">{feedback1.feedback}</p>
            </div>
          )}
          {feedback2 && (
            <div className="text-center bg-gradient-to-b from-black to-indigo-600 p-8 rounded-lg shadow-lg">
              <img
                className="w-28 h-28 rounded-full mx-auto mb-4 border-2 border-orange-400"
                src={feedback2.img}
                alt=""
              />
              <h3 className="text-3xl text-white">{feedback2.clientName}</h3>
              <div className="mx-auto mt-2">
                <Rating
                  className="text-yellow-400 mx-auto"
                  style={{ maxWidth: 180 }}
                  value={feedback2.rating}
                  readOnly
                />
              </div>
              <p className="text-white">{feedback2.feedback}</p>
            </div>
          )}
        </div>
      </SwiperSlide>
    );
  }

  return (
    <section>
      <SectionTitle
        subHeading={"what our users say"}
        heading={"Feedback"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {slides}
      </Swiper>
    </section>
  );
};

export default Feedback;
