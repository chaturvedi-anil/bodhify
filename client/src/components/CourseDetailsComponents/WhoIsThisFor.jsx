"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code2, BriefcaseBusiness } from "lucide-react";

const audience = [
  {
    title: "Beginners in Tech",
    description:
      "Those who want to start a career in software development with strong fundamentals.",
    icon: GraduationCap,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Self-taught Developers",
    description:
      "People who already know the basics but need a structured roadmap and real projects to become job-ready.",
    icon: Code2,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Working Professionals",
    description:
      "Anyone looking to upgrade skills in Full-Stack + DevOps and grow into better roles in tech.",
    icon: BriefcaseBusiness,
    color: "bg-orange-100 text-orange-600",
  },
];

const WhoIsThisFor = () => {
  return (
    <div className="min-h-screen pt-4 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-12">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-4xl font-bold font-mono text-(--bodhify-navy) tracking-tight">
            Who is This For?
          </h2>

          <p className="mt-6 text-lg font-mono text-muted-foreground">
            Whether you're starting fresh or leveling up, this cohort is
            designed for your success.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {audience.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card
                key={index}
                className="border-none shadow-none bg-transparent text-center"
              >
                <CardContent className="space-y-6">
                  <div
                    className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center ${item.color}`}
                  >
                    <Icon className="w-10 h-10" />
                  </div>

                  <h3 className="text-2xl font-bold font-mono text-(--bodhify-navy)">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground font-mono text-lg leading-8 line-clamp-4">
                    {item.description}
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
export default WhoIsThisFor;
