import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import HomePage from "@/features/home/HomePage";
import CourseListPage from "@/features/course/pages/CourseListPage";
import CourseDetailPage from "@/features/course/pages/CourseDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "courses", element: <CourseListPage /> },
      { path: "courses/:id", element: <CourseDetailPage /> },
    ],
  },
]);

export default router;
