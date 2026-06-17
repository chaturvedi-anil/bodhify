import React from "react";
import { useParams } from "react-router-dom";
import { useGetCourseDetails } from "../api/course.query";
import CourseDetailsHero from "@/components/CourseDetailsComponents/CourseDetailsHero";
import WhatWillYouLearn from "@/components/CourseDetailsComponents/WhatWillYouLearn";
import WhoIsThisFor from "@/components/CourseDetailsComponents/WhoIsThisFor";
import CourseOutcomes from "@/components/CourseDetailsComponents/CourseOutcomes";

const CourseDetailPage = () => {
  const { id } = useParams();

  const { isLoading, isError, error, data: course } = useGetCourseDetails(id);

  if (isLoading) {
    return <div>Loading... </div>;
  }
  if (isError) {
    return <div>{error} </div>;
  }
  return (
    <>
      <CourseDetailsHero course={course} />
      <WhatWillYouLearn />
      <WhoIsThisFor />
      <CourseOutcomes />
    </>
  );
};

export default CourseDetailPage;
