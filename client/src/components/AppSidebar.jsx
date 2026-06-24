"use client";

import { NavLink, useNavigate, Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/features/auth/api/auth.query";
import { FiLogOut } from "react-icons/fi";

const AppSidebar = ({ title, items }) => {
  const navigate = useNavigate();
  const { mutate: logout } = useLogout();

  const handleLogout = () => {
    localStorage.removeItem("token");
    logout();
    navigate("/login");
  };

  return (
    <Sidebar className="border-r border-gray-200">
      {/* Header */}
      <SidebarHeader className="border-b px-4 py-5">
        <div className="flex items-center-justify-center">
          {" "}
          <Link to="/" className="flex items-center gap-1 shrink-0">
            <span className="text-2xl font-mono font-bold tracking-wide text-(--bodhify-navy)">
              Bodhi
            </span>
            <span
              className="text-2xl font-mono font-bold tracking-wide px-1 rounded"
              style={{
                color: "#00a892",
                background: "rgba(0,168,146,0.1)",
              }}
            >
              fy
            </span>
          </Link>
        </div>
      </SidebarHeader>

      {/* Sidebar Menu */}
      <SidebarContent className="px-3 py-4">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/dashboard" || item.path === "/admin"}
              >
                {({ isActive }) => (
                  <SidebarMenuButton
                    className={`
                      w-full flex items-center gap-3 rounded-lg px-3 py-6 my-1 font-mono  cursor-pointer transition-all
                      ${
                        isActive
                          ? "text-white hover:text-white hover:bg-(--bodhify-dark-navy)"
                          : "text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                      }
                    `}
                    style={
                      isActive
                        ? {
                            backgroundColor: "var(--bodhify-navy)",
                          }
                        : {}
                    }
                  >
                    <span className="text-lg font-mono ">{item.icon}</span>
                    <span className="font-medium font-mono ">{item.label}</span>
                  </SidebarMenuButton>
                )}
              </NavLink>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t p-4 mt-auto">
        <Button
          variant="destructive"
          className="w-full flex font-mono items-center gap-2 cursor-pointer"
          onClick={handleLogout}
        >
          <FiLogOut size={18} />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
