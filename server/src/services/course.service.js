import Course from "../models/course.model.js";
import { ApiError } from "../utils/ApiError.js";

export const getAllCoursesService = async () => {
  const courses = await Course.find();
  return courses;
};
export const getCourseDetailsService = async (courseId) => {
  const course = await Course.findById(courseId);

  if (!course) throw new ApiError(404, "Course not found");

  return course;
};

export const getMyCoursesService = async () => {};

export const createCourseService = async () => {};

export const getCourseCreateByMeService = async () => {};

export const updateCourseService = async () => {};

export const deleteCourseService = async () => {};
