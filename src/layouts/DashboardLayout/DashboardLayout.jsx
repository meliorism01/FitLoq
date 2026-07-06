import { Outlet } from "react-router-dom";

import Sidebar from "@components/layout/Sidebar";

function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-surface-bg">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <main className="flex-1 overflow-x-hidden">

        <Outlet />

      </main>

    </div>
  );
}

export default DashboardLayout;