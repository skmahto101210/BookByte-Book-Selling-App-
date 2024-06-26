import { Outlet } from "react-router-dom";
import SideBar from "./SideBar.dashboard";
import BookDataProvider from "../store/BookData.store";
import AuthProvider from "../store/AuthProvider.store";

export default function DashboardLayout() {
  return (
    <BookDataProvider>
      <div className="flex gap-4 flex-col md:flex-row">
        <AuthProvider>
          <SideBar />
        </AuthProvider>
        <Outlet />
      </div>
    </BookDataProvider>
  );
}
