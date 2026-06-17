import {
  FaLaptopCode,
  FaProjectDiagram,
  FaUsers,
  FaCertificate,
  FaBriefcase,
  FaRocket,
} from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

const WhyBodhify = () => {
  const whyChooseBodhify = [
    {
      title: "Industry-Focused Curriculum",
      description:
        "Learn modern technologies like React, Node.js, DevOps, and System Design aligned with real industry requirements.",
      icon: FaLaptopCode,
    },
    {
      title: "Hands-on Real Projects",
      description:
        "Build production-level full-stack applications and gain practical experience through live project implementation.",
      icon: FaProjectDiagram,
    },
    {
      title: "Mentorship by Experts",
      description:
        "Get guidance from experienced developers and industry professionals to accelerate your learning journey.",
      icon: FaUsers,
    },
    {
      title: "Career-Focused Training",
      description:
        "Prepare for interviews with DSA, backend concepts, project reviews, and mock interviews.",
      icon: FaBriefcase,
    },
    {
      title: "Certification & Skill Validation",
      description:
        "Earn certifications that validate your practical skills and strengthen your resume for job opportunities.",
      icon: FaCertificate,
    },
    {
      title: "Fast-Track Growth",
      description:
        "Structured learning path designed to help you transition quickly into full-stack, backend, or DevOps roles.",
      icon: FaRocket,
    },
  ];
  return (
    <div className=" min-h-screen pt-4 relative overflow-hidden bg-(--bodhify-light-navy)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-12">
        <div className="flex flex-col gap-12">
          {/* Heading Section */}

          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono text-(--bodhify-bg) mb-4">
              Why Bodhify?
            </h1>
            <p className="text-gray-400 text-sm font-mono sm:text-base lg:text-lg max-w-2xl mx-auto">
              Our most comprehensive and impactful learning experiences
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseBodhify?.map((item, index) => {
              const Icon = item.icon;

              return (
                <Card
                  key={index}
                  className="group border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl h-full"
                >
                  <CardContent className="p-6 flex flex-col items-start gap-4 h-full">
                    {/* Icon */}
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-(--bodhify-navy)/10 text-(--bodhify-navy) group-hover:bg-(--bodhify-navy) group-hover:text-white transition-colors duration-300">
                      <Icon size={28} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-(--bodhify-navy) font-mono">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 font-mono leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBodhify;
