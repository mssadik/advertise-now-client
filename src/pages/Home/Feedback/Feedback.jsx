import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Feedback = () => {
  const [feedbacks, setFeedback] = useState([]);
  useEffect(() => {
    fetch("feedback.json")
      .then((res) => res.json())
      .then((data) => setFeedback(data));
  }, []);
  return (
    <section>
      <SectionTitle
        subHeading={"what our user say"}
        heading={"Feedback"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {feedbacks.map((feedback) => (
          <SwiperSlide key={feedback.id}>
            <div className="text-center flex flex-col justify-center items-center mx-24 my-16 space-y-3">
              <Rating
                className="mb-2 md:mb-4"
                style={{ maxWidth: 180 }}
                value={feedback.rating}
                readOnly
              />
              <p>{feedback.feedback}</p>
              <h3 className="text-3xl text-yellow-400">
                {feedback.clientName}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Feedback;
