import React from 'react'
import { FaPeopleArrows } from 'react-icons/fa';
import { LuHeartHandshake, LuHandCoins } from "react-icons/lu";
import { GiEarthAfricaEurope } from "react-icons/gi";


const reasons = [
  {
    title: 'Empowering Black and African creators',
    description:
      'We provide authentic, high-quality images that reflect Black and African identities—helping designers, storytellers, and brands stay culturally relevant and visually impactful.',
    icon: <LuHeartHandshake size={24} />,
  },
  {
    title: 'Curated for Cultural Relevance',
    description:
      'Every image on our platform is intentionally selected to capture the richness, nuance, and beauty of Black and African life—beyond stereotypes or stock clichés.',
    icon: <GiEarthAfricaEurope size={24} />,
  },
  {
    title: 'A platform built by Black creatives, for Black creatives',
    description:
      'BLACK & ICONIC is more than a photo bank—it’s a movement. Created by Black creatives for Black creatives, our platform centers representation and equity in every frame.',
    icon: <FaPeopleArrows size={24} />,
  },
  {
    title: 'Affordable, high-quality content',
    description:
      'Access stunning visuals without the paywall. Our freemium model makes sure creators of all levels—from freelancers to startups—have access to top-tier content.',
    icon: <LuHandCoins size={24} />,
  },
  
];

const WhyUsSection = () => {
  return (
    <section className="bg-obsedian text-white py-16 px-4 md:px-12 font-poppins">
      <h2 className="text-lg md:text-xl text-gray-400 font-medium mb-10 font-poppins">
        Why choose <span className='text-white font- font-semibold italic'>Black & Iconic?</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reasons.map((reason, index) => (
          <article
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex flex-col justify-between shadow-md hover:scale-105 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold leading-tight w-11/12">
                {reason.title}
              </h3>
              <div className="text-white">{reason.icon}</div>
            </div>
            <p className="text-sm text-gray-300">{reason.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhyUsSection;