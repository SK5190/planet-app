import React from "react";

interface PlanetDetailsProps {
  name: string;
  description: string;
  image: string;
  source: string;
  onOverview: () => void;
  onStructure: () => void;
  onGeology: () => void;
}

const PlanetDetails: React.FC<PlanetDetailsProps> = ({
  name,
  description,
  image,
  source,
  onOverview,
  onStructure,
  onGeology,
}) => (
  <div className="flex justify-center items-center h-1/2 py-10">
    <section className="w-1/2 h-1/2 flex items-center p-10">
      <img src={image} alt={name} className="w-1/2 h-1/2" />
    </section>
    <section className="text-white w-1/3 flex flex-col gap-7 px-10">
      <h1 className="font-[Antonio] text-white text-7xl">{name}</h1>
      <p className="font-[Spartan] text-sm">{description}</p>
      <h5 className="font-[Spartan] text-sm">
        Source: <a href={source} target="_blank" rel="noopener noreferrer">Wikipedia</a>
      </h5>
      <section className="flex flex-col gap-4">
        <button onClick={onOverview} className="font-[Antonio] tracking-widest text-sm border-2 border-white w-full h-10 flex gap-2 pl-4 items-center hover:bg-[#38384F]">
          <p className="text-sm text-[#656570]">01</p>
          <p className="text-sm text-white">OVERVIEW</p>
        </button>
        <button onClick={onStructure} className="font-[Antonio] tracking-widest text-sm border-2 border-white w-full h-10 flex gap-2 items-center pl-4 hover:bg-[#38384F]">
          <p className="text-sm text-[#656570]">02</p>
          <p className="text-sm text-white">INTERNAL STRUCTURE</p>
        </button>
        <button onClick={onGeology} className="font-[Antonio] tracking-widest text-sm border-2 border-white w-full h-10 flex gap-2 items-center pl-4 hover:bg-[#38384F]">
          <p className="text-sm text-[#656570]">03</p>
          <p className="text-sm text-white">SURFACE GEOLOGY</p>
        </button>
      </section>
    </section>
  </div>
);

export default PlanetDetails; 