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

export const getMyCoursesService = async (userId) => {};

export const getCourseCreateByMeService = async (instructorId) => {
  const course = await Course.find({ instructorId: instructorId });
  if (!course) {
    return res.status(200).json({
      success: true,
      message: "You have not created any courses yet.",
      data: course,
    });
  }
  return course;
};

export const createCourseService = async (data, instructorId) => {
  const existingCourse = await Course.findOne({ slug: data.slug });
  if (existingCourse) {
    throw new ApiError(409, "Course slug already exists");
  }
  const newCourse = await Course.create({
    ...data,
    instructorId,
  });

  return newCourse;
};

export const updateCourseService = async (data, courseId, instructorId) => {
  if (data.slug) {
    const existingSlug = await Course.findOne({
      slug: data.slug,
      _id: { $ne: courseId },
    });

    if (existingSlug) {
      throw new ApiError(409, "Course slug already exists");
    }
  }

  const updatedCourse = await Course.findOneAndUpdate(
    {
      _id: courseId,
      instructorId,
    },
    {
      $set: data,
    },
    {
      after: true,
      runValidators: true,
    },
  );

  if (!updatedCourse) {
    throw new ApiError(404, "Course not found!");
  }

  return updatedCourse;
};

export const deleteCourseService = async (courseId, instructorId) => {
  const deletedCourse = await Course.findOneAndDelete({
    _id: courseId,
    instructorId,
  });
  if (!deletedCourse) throw new ApiError(404, "Course not found");

  return deletedCourse;
};
