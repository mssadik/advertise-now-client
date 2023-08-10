import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
    return (
        <Carousel
      className="text-center"
    >
      <div className="">
        <img src="https://i.postimg.cc/VLQnzRj1/pexels-mikael-blomkvist-6483579.jpg" />
      </div>
      <div className="">
        <img src="https://i.postimg.cc/ZRWp5s7Y/pexels-mikael-blomkvist-6476584.jpg" />
      </div>
      <div >
        <img src="https://i.postimg.cc/HLBV50cJ/pexels-tatiana-syrikova-3975577.jpg" />
      </div>
      <div>
        <img src="https://i.postimg.cc/QNmLg60x/pexels-rdne-stock-project-7310210.jpg" />
      </div>
      <div>
        <img src="https://i.postimg.cc/KY8Jn2vm/pexels-startup-stock-photos-7375.jpggi" />
      </div>
    </Carousel>
    );
};

export default Banner;