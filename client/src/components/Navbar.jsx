import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <span
              className="text-2xl font-black font-poppins"
              style={{ color: "#001c52" }}
            >
              Bodhi
            </span>
            <span
              className="text-2xl font-black font-poppins px-1 rounded"
              style={{ color: "#00a892", background: "rgba(0,168,146,0.1)" }}
            >
              fy
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="nav-link text-sm font-medium text-gray-700 hover:text-[#001c52] transition-colors"
            >
              Home
            </Link>
            <Link
              href="#courses"
              className="nav-link text-sm font-medium text-gray-700 hover:text-[#001c52] transition-colors"
            >
              Courses
            </Link>
            <Link
              href="#community"
              className="nav-link text-sm font-medium text-gray-700 hover:text-[#001c52] transition-colors"
            >
              Community
            </Link>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 bg-gray-100 rounded px-3 py-1.5 outline-1">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Type to search"
                className="bg-transparent text-sm text-gray-600 outline-none w-32 placeholder:text-gray-400"
              />
            </div>
            <button className="px-4 py-2 text-sm font-semibold rounded-lg border-2 border-[#001c52] text-[#001c52] hover:bg-[#001c52] hover:text-white transition-all duration-200">
              Sign up
            </button>
            <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-[#001c52] text-white hover:bg-[#020A3F] transition-all duration-200">
              Log in
            </button>
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
            href="/"
            className="block text-sm font-medium text-gray-700 py-2"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#courses"
            className="block text-sm font-medium text-gray-700 py-2"
            onClick={() => setMobileOpen(false)}
          >
            Courses
          </Link>
          <Link
            href="#community"
            className="block text-sm font-medium text-gray-700 py-2"
            onClick={() => setMobileOpen(false)}
          >
            Community
          </Link>
          <div className="flex gap-2 pt-2">
            <button className="flex-1 py-2 text-sm font-semibold rounded-lg border-2 border-[#001c52] text-[#001c52]">
              Sign up
            </button>
            <button className="flex-1 py-2 text-sm font-semibold rounded-lg bg-[#001c52] text-white">
              Log in
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
