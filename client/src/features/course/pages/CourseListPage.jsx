import React from "react";
import { useGetCourses } from "../api/course.query";
import {
  Card,
  CardAction,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const CourseListPage = () => {
  const { isLoading, isError, error, data: courses } = useGetCourses();
  if (isLoading) {
    return <div>Loading... </div>;
  }
  if (isError) {
    return <div>{error} </div>;
  }
  return (
    <div className=" min-h-screen pt-4 relative overflow-hidden bg-(--bodhify-bg)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-12">
        <h1 className="text-4xl  text-center text-(--bodhify-navy) font-mono font-bold my-8">
          Featured Courses
        </h1>
        <div className="grid gap-6">
          {courses?.map((course, index) => {
            return (
              <Card
                key={index}
                className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Left Image */}
                  <CardHeader className="w-full lg:w-[40%] p-4">
                    <img
                      src={
                        course.image ||
                        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80"
                      }
                      alt={course.title}
                      className="w-full h-56 lg:h-full rounded-xl object-cover"
                    />
                  </CardHeader>

                  {/* Right Content */}
                  <CardContent className="flex-1 p-6 flex flex-col justify-between gap-3">
                    {/* Title + Description */}
                    <div className="space-y-3">
                      <CardTitle className="text-2xl font-bold font-mono text-(--bodhify-navy)">
                        {course.title}
                      </CardTitle>

                      <p className="text-(--bodhify-grey) font-mono line-clamp-3 leading-relaxed">
                        {course.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {course.tags?.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="font-mono bg-(--bodhify-teal)/10 text-(--bodhify-teal)"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Level + Language */}
                    <div className="flex flex-wrap gap-3 text-sm font-mono text-(--bodhify-grey)">
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

                    {/* Price + Button */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-3xl font-mono font-bold text-(--bodhify-navy)">
                          ₹{course.price}
                        </span>

                        <span className="text-xl font-mono text-(--bodhify-grey) line-through">
                          ₹{course.originalPrice || "9999"}
                        </span>
                        <Badge className="bg-(--bodhify-light-green) text-(--bodhify-green)">
                          {course.discount}% off
                        </Badge>
                      </div>

                      <CardAction>
                        <Link to={`/courses/${course._id}`}>
                          {" "}
                          <Button className="w-full cursor-pointer font-mono sm:w-auto px-8 bg-(--bodhify-navy) hover:bg-(--bodhify-dark-navy) ">
                            View Details
                          </Button>
                        </Link>
                      </CardAction>
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseListPage;
