import { Link } from "react-router-dom";


const Services = () => {
  return (
    <section className="bg-gradient-to-r from-[#11022B] to-[#052646]  md:gap-16 py-36 px-8 md:px-44">
      <h3 className="uppercase text-4xl text-bold text-white text-center pb-4">
        our best services
      </h3>
      <div className="text-gray-300 font-semibold text-center flex justify-center gap-8 pb-12 md:pb-16">
        <p>Updated regularly</p>
        <p>Coding not required</p>
        <p>Hastle-free imports</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       
        <Link>
          <div>
            <img
              src="https://i.postimg.cc/vmr0GRSv/shop.png"
              alt="services image"
            />
            <p className="text-center text-white pt-2 md:pt-3 pb-4">Shop</p>
          </div>
        </Link>
        
        <Link>
          <div>
            <img
              src="https://i.postimg.cc/k4wwtQC6/Hosting.png"
              alt="services image"
            />
            <p className="text-center text-white pt-2 md:pt-3 pb-4">Hosting</p>
          </div>
        </Link>
       
        
        <Link>
          <div>
            <img
              src="https://i.postimg.cc/QN408JSv/spyro-demos-wedding-thumbnail.png"
              alt="services image"
            />
            <p className="text-center text-white pt-2 md:pt-3 pb-4">
              Wedding Planner
            </p>
          </div>
        </Link>
     
        <Link>
          <div>
            <img
              src="https://i.postimg.cc/m2KjMZvw/spyro-demos-skin-thumbnail.png"
              alt="services image"
            />
            <p className="text-center text-white pt-2 md:pt-3 pb-4">
              Skin Care Product
            </p>
          </div>
        </Link>
       
        <Link>
          {" "}
          <div>
            <img
              src="https://i.postimg.cc/Jh559NG6/spyro-demos-pet-thumbnail.png"
              alt="services image"
            />
            <p className="text-center text-white pt-2 md:pt-3 pb-4">
              Pet Care Service
            </p>
          </div>
        </Link>
       
        <Link>
          <div>
            <img
              src="https://i.postimg.cc/pV6JbXLH/spyro-demos-fitness-thumbnail.png"
              alt="services image"
            />
            <p className="text-center text-white pt-2 md:pt-3 pb-4">
              Online Fitness Training
            </p>
          </div>
        </Link>
        
        <Link>
          <div>
            <img
              src="https://i.postimg.cc/jdnQs0DJ/spyro-demos-mobile-app-thumbnail.png"
              alt="services image"
            />
            <p className="text-center text-white pt-2 md:pt-3 pb-4">
              Mobile App
            </p>
          </div>
        </Link>
        
        <Link>
          <div>
            <img
              src="https://i.postimg.cc/7L9SBqWj/spyro-blog-thumbnail-new.png"
              alt="services image"
            />
            <p className="text-center text-white pt-2 md:pt-3 pb-4">Blog</p>
          </div>
        </Link>
  
      </div>
    </section>
  );
};

export default Services;
