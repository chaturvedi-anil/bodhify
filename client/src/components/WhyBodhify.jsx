import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Video,
  User,
  Code2,
  BookOpen,
} from "lucide-react";

const reasons = [
  {
    icon: Video,
    title: "Live Interactive Sessions",
    description:
      "Learn in real-time with weekend live sessions, interactive Q&A, and direct mentorship from industry experts.",
    color: "#00DDB3",
    bg: "rgba(0,221,179,0.1)",
  },
  {
    icon: User,
    title: "Real Engineer, Real Experience",
    description:
      "Learn from industry veterans who have built & scaled real-world systems at top tech companies.",
    color: "#a46bf5",
    bg: "rgba(164,107,245,0.1)",
  },
  {
    icon: Code2,
    title: "Learn by Doing",
    description:
      "Hands-on projects, open-source contributions & practical coding. Build payment systems, automation tools & end-to-end applications.",
    color: "#f4c947",
    bg: "rgba(244,201,71,0.1)",
  },
  {
    icon: BookOpen,
    title: "Job-Ready Curriculum",
    description:
      "Master DSA, System Design, DevOps & scalable full-stack skills. From JavaScript to MERN stack & blockchain technologies.",
    color: "#00a892",
    bg: "rgba(0,168,146,0.1)",
  },
];

const WhyBodhify = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const prev = () =>
    setActiveIndex((i) => (i === 0 ? reasons?.length - 1 : i - 1));
  const next = () =>
    setActiveIndex((i) => (i === reasons?.length - 1 ? 0 : i + 1));

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black font-poppins text-[#001c52] mb-3">
            Why Bodhify?
          </h2>
          <p className="text-gray-500 text-lg">
            Our most comprehensive and impactful learning experiences
          </p>
        </div>

        {/* Cards Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons?.map((reason, index) => (
            <div
              key={index}
              className="why-card bg-white rounded-2xl p-6 border border-gray-100 shadow-sm cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: reason?.bg }}
              >
                <reason.icon
                  className="w-6 h-6"
                  style={{ color: reason?.color }}
                />
              </div>
              <h3 className="text-lg font-bold text-[#001c52] font-poppins mb-3">
                {reason?.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {reason?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ background: reasons?.[activeIndex]?.bg }}
            >
              {(() => {
                const Icon = reasons?.[activeIndex]?.icon;
                return (
                  <Icon
                    className="w-6 h-6"
                    style={{ color: reasons?.[activeIndex]?.color }}
                  />
                );
              })()}
            </div>
            <h3 className="text-lg font-bold text-[#001c52] font-poppins mb-3">
              {reasons?.[activeIndex]?.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {reasons?.[activeIndex]?.description}
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex gap-2">
              {reasons?.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? "bg-[#001c52] w-6" : "bg-gray-300"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBodhify;
