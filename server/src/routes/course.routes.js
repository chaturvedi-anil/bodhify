import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validation.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";
import {
  courseSchemaValidation,
  updateCourseSchemaValidation,
} from "../validations/course.validation.js";
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

courseRouter.get("/my-courses", authorize("user"), getMyCourses);

courseRouter.use(authorize("admin"));

courseRouter.get("/admin/created-by-me", getCourseCreateByMe);
courseRouter.post("/", validate(courseSchemaValidation), createCourse); //create
courseRouter.patch(
  "/:courseId",
  validate(updateCourseSchemaValidation),
  updateCourse,
); // update
courseRouter.delete("/:courseId", deleteCourse);

export default courseRouter;
