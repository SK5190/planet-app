import React from "react";

interface StatCardProps {
  label: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value }) => (
  <div className="font-[Antonio] text-white text-uppercase tracking-widest border-2 border-[#656570] w-full h-26 px-2 flex flex-col justify-center gap-2 bg-[#070724]">
    <p className="text-sm text-[#656570]">{label}</p>
    <h1 className="text-4xl">{value}</h1>
  </div>
);

export default StatCard; 