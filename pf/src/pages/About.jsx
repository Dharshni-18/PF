import React from 'react';

const About = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-6"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1600x900/?ocean,map,data')`,
      }}
    >
      {/* Centered Glass Card */}
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-10 md:p-16 text-white max-w-3xl w-full text-center shadow-2xl">
        <h2 className="text-4xl font-bold mb-6 drop-shadow-[0_0_10px_white]">
          About Me
        </h2>
        <p className="text-gray-200 leading-relaxed text-lg text-justify">
          I'm Dharshni G, an aspiring data analyst with a passion for creating impactful
          solutions using AI and data-driven insights. My core focus is on building
          real-world applications such as ship route optimization, integrating machine
          learning with user-friendly interfaces. I'm committed to leveraging data for
          smarter decision-making and meaningful impact.
        </p>
      </div>
    </div>
  );
};

export default About;
