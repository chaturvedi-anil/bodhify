import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import {
  FaCode,
  FaFileAlt,
  FaComments,
  FaChartLine,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";

const outcomes = [
  {
    title: "Real-World Projects",
    icon: FaCode,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Portfolio Development",
    icon: FaFileAlt,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Interview Preparation",
    icon: FaComments,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Career Growth",
    icon: FaChartLine,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Industry Mentorship",
    icon: FaUserTie,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Community Access",
    icon: FaUsers,
    color: "bg-cyan-100 text-cyan-600",
  },
];

const CareerOutcomes = () => {
  return (
    <div className="min-h-screen pt-4 relative overflow-hidden bg-(--bodhify-light-grey)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:pt-12 lg:pb-12">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto pb-6">
          <h2 className="text-4xl md:text-4xl font-bold font-mono text-(--bodhify-navy) tracking-tight">
            Career Outcomes
          </h2>

          <p className="mt-6 text-lg font-mono text-muted-foreground">
            Everything you need to launch or accelerate your tech career
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {outcomes.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card
                key={index}
                className="rounded-3xl  bg-white shadow-none hover:shadow-md transition"
              >
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardTitle className="text-2xl font-mono">
                    {item.title}
                  </CardTitle>

                  <Separator />

                  <p className="text-muted-foreground text-lg font-mono leading-8 line-clamp-4">
                    Learn Full Stack Development, DevOps, and Blockchain through
                    live sessions, mentorship, and hands-on coding challenges.
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default CareerOutcomes;
