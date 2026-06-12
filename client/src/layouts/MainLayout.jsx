import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
