import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className=" min-h-screen pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content  */}
          <div className="flex-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 border border-(--bodhify-navy) border-dashed rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00DDB3]" />

              <span className=" text-sm font-medium text-(--bodhify-navy) font-mono tracking-normal">
                Join 100,000+ enrolled students today
              </span>
            </div>

            {/* Heading  */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono text-(--bodhify-navy) leading-tight mb-6">
              Master Fullstack <br /> Development
            </h1>

            {/* Description */}
            <p className="text-(--bodhify-grey) text-lg leading-relaxed mb-8 max-w-xl font-mono">
              Master Full Stack Development through hands-on open source
              projects. Join a community of developers transforming their
              careers with practical, real-world programming skills.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                variant="secondary"
                className={
                  "font-mono px-3 py-3 text-(--bodhify-navy) border-(--bodhify-navy) cursor-pointer"
                }
                size="xl"
              >
                Learn More
              </Button>
              <Link to={"/courses"}>
                <Button
                  variant="default"
                  className={
                    "font-mono bg-(--bodhify-navy) px-3 py-3 hover:bg-(--bodhify-dark-navy) cursor-pointer "
                  }
                  size="xl"
                >
                  Explore Courses
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80"
                  alt="Developer coding on laptop in a modern workspace"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
