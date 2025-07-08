import { CircleChevronRight } from "lucide-react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import image  from "../assets/18463.jpg";
import image2  from "../assets/2151202448.jpg";
import image3  from "../assets/2148960304.jpg";
import image4  from "../assets/2149295744.jpg";
import video from "../assets/mainvid.mp4";

const Hero = () => {
  return (
    <section className="bg-obsedian px-8 py-8 md:pt-24 pb-14 min-h-screen w-full mt-8 max-w-7xl">
      <div className="max-w-[900px] mx-auto text-center my-20 max-sm:mt-[90px]">
        <h1 className="text-3xl md:text-5xl font-poppins font-medium mb-4 leading-tight text-gray-500 max-sm:mt-24">
          The only image repository for the
          <span className="font-bold text-white"> African Community</span>
        </h1>
        <p className="text-center text-[16px] max-sm:px-8 px-24 text-white justify-center max-sm:text-[14px] my-4 text-poppins font-normal"> Empowering <span className="font-black">creators, designers, and brands</span> with culturally relevant visuals
           that reflect the richness and diversity of Black and African experiences around 
           the world.
        </p>
        <Link to={`/login`}>
          <Button label= "Get started for free" />
        </Link>
      </div>

       <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center max-w-6xl mx-auto">
        <div className="col-span-1 hidden md:block">
          <img
            src= {image}
            alt="image of corporate black man"
            className="rounded-lg object-cover w-full"
          />
          <img
            src= {image2}
            alt="image of corporate black man"
            className="rounded-lg object-cover w-full mt-4"
          />

        </div>
        <div className="col-span-2 md:col-span-2">
          <video
           src={video}
           alt="black friends hanging out"
           autoPlay
           loop
           muted
           className="rounded-lg object-cover w-full max-h-full"
          />
        </div>
        <div className="col-span-1 hidden md:block">
          <img
            src= {image3}
            alt="image of corporate black man"
            className="rounded-lg object-cover w-full"
          />
          <img
            src= {image4}
            alt="image of corporate black man"
            className="rounded-lg object-cover w-full mt-4"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;