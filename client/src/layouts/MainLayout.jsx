import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <nav>Navbar</nav>

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </>
  );
};
