import {
  getAllCoursesService,
  getCourseDetailsService,
  getCourseCreateByMeService,
  getMyCoursesService,
  updateCourseService,
  deleteCourseService,
  createCourseService,
} from "../services/course.service.js";

import { asyncHandler } from "../utils/asyncHandler.js";

export const getAllCourses = asyncHandler(async (req, res, next) => {
  const courses = await getAllCoursesService();

  return res.status(200).json({
    success: true,
    data: courses,
  });
});

export const getCourseDetails = asyncHandler(async (req, res, next) => {
  const courseId = req.params.courseId;

  const course = await getCourseDetailsService(courseId);

  res.status(200).json({
    success: true,
    data: course,
  });
});

export const getMyCourses = asyncHandler(async (req, res, next) => {
  const userId = req.user._id;
  const courses = await getMyCoursesService(userId);

  return res.status(200).json({
    success: true,
    data: course,
  });
});

export const getCourseCreateByMe = asyncHandler(async (req, res, next) => {
  const instructorId = req.user._id;
  const course = await getCourseCreateByMeService(instructorId);

  return res.status(200).json({
    success: true,
    data: course,
  });
});

export const createCourse = asyncHandler(async (req, res, next) => {
  const data = req.body;
  const instructorId = req.user.userId;

  const course = await createCourseService(data, instructorId);

  return res.status(201).json({
    success: true,
    message: `${course.title} course added successfully`,
    data: course,
  });
});

export const updateCourse = asyncHandler(async (req, res, next) => {
  const data = req.body;
  const instructorId = req.user._id;
  const courseId = req.params.courseId;

  const updatedCourse = await updateCourseService(data, courseId, instructorId);

  return res.status(201).json({
    success: true,
    message: `${updatedCourse.title} course details update successfully`,
    data: updatedCourse,
  });
});

export const deleteCourse = asyncHandler(async (req, res, next) => {
  const instructorId = req.user._id;
  const courseId = req.params.courseId;

  const deletedCourse = await deleteCourseService(courseId, instructorId);
  return res.status(201).json({
    success: true,
    message: `${deletedCourse.title} course deleted successfully`,
    data: deletedCourse,
  });
});
