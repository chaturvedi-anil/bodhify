import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validation.middleware.js";
import { courseSchemaValidation } from "../validations/course.validation.js";
import {
  getAllCourses,
  getCourseDetails,
  getMyCourses,
  getCourseCreateByMe,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../contollers/course.controller.js";

const courseRouter = Router();

// Public
courseRouter.get("/", getAllCourses);
courseRouter.get("/:courseId", getCourseDetails);

// Logged-in users
courseRouter.use(isAuthenticated);

courseRouter.get("/my-courses", getMyCourses);

courseRouter.get("/created-by-me/:instructorId", getCourseCreateByMe);
courseRouter.post("/", validate(courseSchemaValidation), createCourse); //create
courseRouter.patch(
  "/:courseId",
  validate(courseSchemaValidation),
  updateCourse,
); // update
courseRouter.delete("/:courseId", deleteCourse);

export default courseRouter;
