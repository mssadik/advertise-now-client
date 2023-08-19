// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    // <Carousel className="text-center">
    //   <div className="">
    //     <img src="https://i.postimg.cc/VLQnzRj1/pexels-mikael-blomkvist-6483579.jpg" />
    //   </div>
    //   <div className="">
    //     <img src="https://i.postimg.cc/K8McB46L/pexels-mikael-blomkvist-6476587.jpg" />
    //   </div>
    //   <div>
    //     <img src="https://i.postimg.cc/NMrZPrx7/pexels-mikael-blomkvist-6483582.jpg" />
    //   </div>
    //   <div>
    //     <img src="https://i.postimg.cc/ZRWp5s7Y/pexels-mikael-blomkvist-6476584.jpg" />
    //   </div>
    //   <div>
    //     <img src="https://i.postimg.cc/13GtbfvS/pexels-tima-miroshnichenko-7567595.jpg" />
    //   </div>
    // </Carousel>
    <section className="flex justify-center items-center pt-48 pb-40 px-8 md:px-16 gap-8 bg-gradient-to-r from-[#4B57F9] to-[#127BD0] ">
      <div className="text-white space-y-5">
          <p className="text-lg font-semibold">INTRODUCING SPYRO MARKETING LANDING PAGE THEME</p>
          <h1 className="text-5xl font-bold"> Build high converting landing pages in minutes with spyro</h1>
          <p>Carefully crafted after analyzing the needs of different industries and the design achieves a great balance between purpose & presentation.</p>
          <button className="btn btn-secondary">Purchase Now</button>
      </div>
      <div>
        <img style={{width: '1600px'}}  src="https://i.postimg.cc/PfRRDY4y/spyro-demos-hero.png" alt="Banner Image" />
      </div>
    </section>
  );
};

export default Banner;
