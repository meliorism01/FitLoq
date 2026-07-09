import { Outlet } from "react-router-dom";

import Sidebar from "@components/layout/Sidebar";
import TopNavbar from "@components/layout/TopNavbar";

function DashboardLayout() {
  return (
    <div className="flex h-screen bg-surface-bg">

  <Sidebar />

  <div className="flex flex-1 flex-col overflow-hidden">

    <TopNavbar />

    <main
  id="dashboard-scroll"
  className="flex-1 overflow-y-auto overflow-x-hidden p-8"
>
      <Outlet />
    </main>

  </div>

</div>
  );
}

export default DashboardLayout;