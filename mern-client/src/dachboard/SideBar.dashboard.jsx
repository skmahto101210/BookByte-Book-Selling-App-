import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import bookByte_logo from "../assets/bookByte.png";

import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { AuthContext } from "../store/AuthProvider.store";

export default function SideBar() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Sidebar aria-label="Sidebar with content separator example">
        <Link
          to="/"
          className="text-2xl font-bold text-pink-600 flex items-center gap-2 mb-3 mt-4">
          <img
            src={bookByte_logo}
            alt="BookByte-logo"
            className="w-14 mx-2 object-fill"
          />
          <div className="text-3xl leading-snug">BookByte</div>
        </Link>
        <Sidebar.Items className="mt-7">
          <Sidebar.ItemGroup className="pl-7">
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/dashboard/upload-book"
              icon={HiOutlineCloudUpload}>
              Upload Book
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage-books" icon={HiInbox}>
              Manage Books
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/user-profile" icon={HiUser}>
              Users
            </Sidebar.Item>

            {!user && (
              <Sidebar.Item href="/login" icon={HiArrowSmRight}>
                Sign In
              </Sidebar.Item>
            )}

            <Sidebar.Item href="/logout" icon={HiTable}>
              log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup className="pl-7">
            <Sidebar.Item href="#" icon={HiChartPie}>
              Upgrade to Pro
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Documentation
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
