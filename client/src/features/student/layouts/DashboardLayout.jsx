import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import DashboardNavbar from "@/components/DashboardNavbar";

import { FaHome, FaBookOpen, FaUserCircle } from "react-icons/fa";

const sidebarItems = [
  {
    label: "Overview",
    path: "/dashboard",
    icon: <FaHome />,
  },
  {
    label: "My Courses",
    path: "/dashboard/my-courses",
    icon: <FaBookOpen />,
  },
  {
    label: "Profile",
    path: "/dashboard/profile",
    icon: <FaUserCircle />,
  },
];

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <AppSidebar items={sidebarItems} />

        {/* Main Section */}
        <div className="flex-1 flex flex-col bg-gray-50">
          {/* Top Navbar */}
          <DashboardNavbar />

          {/* Page Content */}
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
