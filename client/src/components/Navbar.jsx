import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { Button } from "./ui/button";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useLogout } from "@/features/auth/api/auth.query";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { mutate: logout } = useLogout();

  const handleLogout = () => {
    localStorage.removeItem("token");
    logout();
    navigate("login");
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-1 shrink-0">
              <span className="text-2xl font-mono tracking-wide text-(--bodhify-navy)">
                Bodhi
              </span>
              <span
                className="text-2xl font-black font-mono tracking-wide px-1 rounded"
                style={{ color: "#00a892", background: "rgba(0,168,146,0.1)" }}
              >
                fy
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8 ml-8">
              <Link
                to="/"
                className="nav-link text-sm font-medium font-mono tracking-wide text-gray-700 hover:text-[#001c52] transition-colors"
              >
                Home
              </Link>
              <Link
                to="/courses"
                className="nav-link text-sm font-medium font-mono tracking-wide text-gray-700 hover:text-[#001c52] transition-colors"
              >
                Courses
              </Link>
              <Link
                to="/"
                className="nav-link text-sm font-medium font-mono tracking-wide text-gray-700 hover:text-[#001c52] transition-colors"
              >
                Community
              </Link>
            </div>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            {pathname?.includes("/login") || pathname?.includes("/register") ? (
              <Link to={"/"}>
                <Button
                  className={
                    "px-4 py-2 text-sm font-mono text-white cursor-pointer bg-(--bodhify-navy) hover:bg-(--bodhify-dark-navy)"
                  }
                  variant={"default"}
                >
                  <FaRegArrowAltCircleLeft className="" /> Back
                </Button>
              </Link>
            ) : ["/", "/courses"].some((route) => pathname !== route) ||
              /^\/courses\/[^/]+$/.test(pathname) ? (
              <>
                <Button
                  variant="destructive"
                  className={
                    "px-4 py-2 text-sm font-mono tracking-wide cursor-pointer"
                  }
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 bg-gray-100 rounded px-3 py-1.5 outline-1">
                  <Search className="w-4 h-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Type to search"
                    className="bg-transparent text-sm font-mono tracking-wide text-gray-600 outline-none w-32 placeholder:text-gray-400"
                  />
                </div>

                <Link to={"/register"}>
                  <Button
                    className={
                      "px-4 py-2 text-sm font-mono tracking-wide text-[#001c52] border-gray-300 border cursor-pointer "
                    }
                    variant={"secondary"}
                  >
                    Sign up
                  </Button>
                </Link>
                <Link to={"/login"}>
                  <Button
                    className={
                      "px-4 py-2 text-sm font-mono tracking-wide bg-[#001c52] text-white hover:bg-[#020A3F] cursor-pointer"
                    }
                  >
                    Login
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <Link
            to="/"
            className="block text-sm font-medium font-mono tracking-wide text-gray-700 py-2"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/courses"
            className="block text-sm font-medium font-mono tracking-wide text-gray-700 py-2"
            onClick={() => setMobileOpen(false)}
          >
            Courses
          </Link>
          <Link
            to="#community"
            className="block text-sm font-medium font-mono tracking-wide text-gray-700 py-2"
            onClick={() => setMobileOpen(false)}
          >
            Community
          </Link>
          <div className="flex gap-2 pt-2">
            <Link to={"/register"}>
              <Button
                className={
                  "flex-1 py-2 text-sm font-mono tracking-wide text-[#001c52] border-gray-300 border cursor-pointer "
                }
                variant={"secondary"}
              >
                Sign up
              </Button>
            </Link>
            <Link to={"login"}>
              {" "}
              <Button
                className={
                  "flex-1 py-2 text-sm font-mono tracking-wide bg-[#001c52] text-white hover:bg-[#020A3F] cursor-pointer"
                }
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
