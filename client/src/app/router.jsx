import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import HomePage from "@/features/home/HomePage";
import CourseListPage from "@/features/course/pages/CourseListPage";
import CourseDetailPage from "@/features/course/pages/CourseDetailPage";
import GuestRoute from "@/routes/GuestRoute";
import AuthLayout from "@/layouts/AuthLayout";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import ProtectedRoute from "@/routes/ProtectedRoute";
import DashboardLayout from "@/layouts/DashboardLayout";

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
  {
    element: (
      <GuestRoute>
        <AuthLayout />
      </GuestRoute>
    ),
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [],
  },
]);

export default router;
