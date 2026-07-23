import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="bg-[#030712] text-white overflow-x-hidden min-h-screen">
      <Outlet />
    </main>
  );
};

export default MainLayout;