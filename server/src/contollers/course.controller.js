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

  res.status(200).json({
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

export const getMyCourses = asyncHandler(async (req, res, next) => {});

export const getCourseCreateByMe = asyncHandler(async (req, res, next) => {});

export const createCourse = asyncHandler(async (req, res, next) => {});

export const updateCourse = asyncHandler(async (req, res, next) => {});

export const deleteCourse = asyncHandler(async (req, res, next) => {});
