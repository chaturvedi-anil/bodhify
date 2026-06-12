"use client";

import { Trophy, DollarSign, Briefcase } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    value: "27",
    label: "Students cracked GSoC 2025",
    color: "#f4c947",
  },
  {
    icon: DollarSign,
    value: "$150K",
    label: "Highest International package",
    color: "#00DDB3",
  },
  {
    icon: Briefcase,
    value: "200+",
    label: "High paying internships confirmed",
    color: "#a46bf5",
  },
];

const StatsBar = () => {
  return (
    <section className="stats-gradient py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          {stats?.map((stat, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `${stat?.color}20`,
                  border: `1px solid ${stat?.color}40`,
                }}
              >
                <stat.icon className="w-6 h-6" style={{ color: stat?.color }} />
              </div>
              <div>
                <div
                  className="text-2xl font-black text-white font-poppins"
                  style={{ color: stat?.color }}
                >
                  {stat?.value}
                </div>
                <div className="text-sm text-white/70">{stat?.label}</div>
              </div>
              {index < stats?.length - 1 && (
                <div className="hidden sm:block w-px h-12 bg-white/10 ml-12" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
