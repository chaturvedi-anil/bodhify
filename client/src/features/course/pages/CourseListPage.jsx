import FeaturedCourses from "@/components/FeaturedCourses";
import React from "react";

const CourseListPage = () => {
  return (
    <>
      <div className="pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">featuresd</div>
        <FeaturedCourses isCourseList={true} />
      </div>
    </>
  );
};

export default CourseListPage;
