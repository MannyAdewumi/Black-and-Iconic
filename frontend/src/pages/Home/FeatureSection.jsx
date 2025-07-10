import React, {useState} from 'react'
import runner from '../../assets/2148948548.jpg'
import artist from '../../assets/2151709087.jpg'
import creative from '../../assets/2151609172.jpg'
import mapAfrica from '../../assets/AfricanMap.png'
import { Link } from 'react-router-dom'

const allFeatures = {
  Images: [
    { title: "Find high-quality images", img: runner },
    { title: "Create on-brand images", img: artist },
    { title: "Upload your work and get paid", img: creative },
  ],
  Video: [
    { title: "High quality videos", img: runner },
    { title: "Remove background from video", img: runner },
  ],
  Icons: [
    { title: "Get quality African icons", img: mapAfrica },
  ],
  Illustrations: [],
  
};

const tabs = Object.keys(allFeatures);


const FeatureSection = () => {

  const [selectedTab, setSelectedTab] = useState("Images");
  const features = allFeatures[selectedTab] || [];

  return (
    <section className="bg-black text-white py-16 px-4 md:px-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center md:text-left font-poppins">
        Empowering African creators and brands.
      </h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Tabs */}
        <nav className="flex md:flex-col gap-4 md:min-w-[150px]">
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
            <p className="text-gray-500 col-span-full">No Illustrations available right now</p>
          ) : (
            features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition-transform"
              >
                
                <Link to="/register"><img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-64 object-cover"
                /></Link>
                <div className="p-4">
                  <h3 className="text-sm font-medium font-poppins">{feature.title}</h3>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection