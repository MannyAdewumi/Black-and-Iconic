import React from 'react'
import { FaGlobeAfrica, FaPalette } from "react-icons/fa";
import { RiUserCommunityFill } from "react-icons/ri";
import { MdVisibility } from "react-icons/md";



const reasons = [
  {
    title: 'Empowering African Creatives with Ideal Visuals',
    description:
      'We provide authentic, high-quality images that reflect Black and African identities—helping designers, storytellers, and brands stay culturally relevant and visually impactful.',
    icon: <FaPalette size={24} />,
  },
  {
    title: 'Curated for Cultural Relevance',
    description:
      'Every image on our platform is intentionally selected to capture the richness, nuance, and beauty of Black and African life—beyond stereotypes or stock clichés.',
    icon: <FaGlobeAfrica size={24} />,
  },
  {
    title: 'Built for Africans, by Africans',
    description:
      'BLACK & ICONIC is more than a photo bank—it’s a movement. Created by Black creatives for Black creatives, our platform centers representation and equity in every frame.',
    icon: <RiUserCommunityFill size={24} />,
  },
  {
    title: "Boosting visibility for African Photographers",
    description:
      'By hosting their work, we shine a light on the talent and stories of Black photographers and visual artists—offering global exposure and real-world impact.',
    icon: <MdVisibility size={24} />,
  },
];

const WhyUsSection = () => {
  return (
    <section className="bg-obsedian text-white py-16 px-4 md:px-12">
      <h2 className="text-lg md:text-xl text-gray-200 font-semibold mb-10 font-montserrat"> Why choose Black and Iconic?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reasons.map((reason, index) => (
          <article key={index} className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition-all">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold leading-tight w-11/12">{reason.title}</h3>
              <div className="text-white">{reason.icon}</div>
            </div>
            <p className="text-sm text-gray-300">{reason.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WhyUsSection