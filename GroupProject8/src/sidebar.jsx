import React from "react";
import { Sidebar } from "flowbite-react";
import {
  ChartPieIcon,
  ViewColumnsIcon,
  InboxIcon,
  UserIcon,
  ArrowRightCircleIcon,
  Table,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";

const SidebarComponent = () => {
  return (
    <div className="w-fit display:flex flex-wrap:wrap ">
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={ChartPieIcon}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={ViewColumnsIcon}
              label="Pro"
              labelColor="alternative"
            >
              Kanban
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={InboxIcon} label="3">
              Inbox
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={UserIcon}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={ArrowRightCircleIcon}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={Table}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={ShoppingBagIcon}>
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SidebarComponent;
