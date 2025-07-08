import React, { useState } from 'react';
import Artisan from "../assets/2148931063.jpg";
import Artist from "../assets/2151709087.jpg";
import Runner from "../assets/2148948548.jpg";
import { FaCircleChevronRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import vid from "../assets/mainvid.mp4";
import iconz from "../assets/6750137_253.jpg"

const allFeatures = {
  Images: [
    { title: "Generate an AI image", img: Runner },
    { title: "Find high-quality images", img: Artist},
    { title: "Create on-brand images", img: Artisan},
  ],
  Video: [
    { title: "Create powerful videos for your brand", video: vid },
    { title: "Remove background from video", video: vid},
  ],
  Icons: [
    { title: "Icons designed for Africa", img: iconz },
  ],
  Illustrations: [],
};

const tabs = Object.keys(allFeatures);

const FeatureSection = () => {
  const [selectedTab, setSelectedTab] = useState("Images");

  const features = allFeatures[selectedTab] || [];

  return (
    <section className="bg-black text-white py-16 px-4 md:px-12 w-full max-w-7xl font-poppins">
      <h2 className="text-2xl md:text-3xl font-medium mb-14 text-center md:text-left">
        All the features you need, <span className='text-gray-400'> at your fingertip</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Tabs */}
        <nav className="flex md:flex-col gap-4 md:min-w-[100px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 rounded-full text-left transition ${
                selectedTab === tab
                  ? 'bg-white text-black font-semibold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 transition-opacity duration-300 animate-fadeIn">
          {features.length === 0 ? (
            <p className="text-gray-500 col-span-full">Coming Soon. Please be patient with us {selectedTab}</p>
          ) : (
            features.map((feature, index) => (
              <Link to={`/signup`}>
                <div key={index} className="bg-white backdrop-blur-2xl rounded-xl overflow-hidden hover:scale-105 transition-transform max-h-96 ring-1 ring-gray-400">
                  {feature.video ? <video src={feature.video} autoplay alt="video" loop className='w-full h-80 object-cover'></video> : (
                    <img src={feature.img} alt={feature.title} className='w-full h-80 object-cover' />) 
                  }
                  
                  { /*<img src={feature.img} alt={feature.title} className="w-full h-80 object-cover"/> */}
                  
                  <div className="p-4 text-obsedian flex items-center justify-between">
                    <h3 className="text-sm font-medium ">{feature.title}</h3>
                    <FaCircleChevronRight />
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
