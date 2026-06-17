import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";

const CourseDetailsHero = ({ course }) => {
  return (
    <div className=" min-h-screen pt-4 relative overflow-hidden bg-(--bodhify-titan-white)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-12">
        <div className="flex flex-col lg:flex-row items-start  gap-12 lg:gap-16 mt-16">
          {/* Left content (bigger) */}
          <div className="lg:flex-2 items-start ">
            <h1 className="text-2xl sm:text-5xl lg:text-4xl font-bold font-mono text-(--bodhify-navy) leading-tight mb-3">
              {course.title}
            </h1>

            <p className="text-(--bodhify-grey) text-lg leading-relaxed mb-8 max-w-xl text-justify font-mono line-clamp-2">
              {course.subTitle}
            </p>

            <p className="text-(--bodhify-grey) text-md leading-normal mb-8 font-mono line-clamp-8">
              {course.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {course.tags?.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="font-mono text-sm px-4 py-3 bg-(--bodhify-bg) text-(--bodhify-navy)"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="">
              <span>
                Level:{" "}
                <Badge
                  variant="secondary"
                  className="font-mono bg-(--bodhify-yellow)/10 text-(--bodhify-yellow)"
                >
                  {course.level}
                </Badge>
              </span>
              <span>
                Language:{" "}
                <Badge
                  variant="secondary"
                  className="font-mono bg-(--bodhify-light-royalblue)/10 text-(--bodhify-royalblue)"
                >
                  {course.courseLanguage}
                </Badge>
              </span>
            </div>
          </div>

          {/* Right content (smaller) */}
          {/* Right content */}
          <div className="lg:flex-1 w-full flex flex-col items-start">
            {/* Image */}
            <div className="w-full mb-6">
              <img
                src={
                  course.image ||
                  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80"
                }
                alt={course.title}
                className="w-full max-w-md h-64 sm:h-80 lg:h-96 rounded-xl object-cover"
              />
            </div>

            {/* Price + CTA */}
            <div className="w-full max-w-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Price section */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-3xl font-mono font-bold text-(--bodhify-navy)">
                  ₹{course.price}
                </span>

                <span className="text-xl font-mono text-(--bodhify-grey) line-through">
                  ₹{course.originalPrice || "9999"}
                </span>

                <Badge className="bg-(--bodhify-light-green) text-(--bodhify-green)">
                  {course.discount || 50}% off
                </Badge>
              </div>

              {/* Button */}
              <Button className="w-full sm:w-auto font-mono bg-(--bodhify-navy) cursor-pointer hover:bg-(--bodhify-dark-navy)">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsHero;
