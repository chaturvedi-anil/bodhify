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
import DashboardLayout from "@/features/student/layouts/DashboardLayout";
import MyCoursesPage from "@/features/student/pages/MyCoursePage";
import OverviewPage from "@/features/student/pages/OverviewPage";
import ProfilePage from "@/features/student/pages/ProfilePage";

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
    children: [
      { index: true, element: <OverviewPage /> },
      { path: "my-courses", element: <MyCoursesPage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
]);

export default router;
