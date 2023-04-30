import React, { Component } from "react";
import { Sidebar } from "flowbite-react";
import {
  ChartPieIcon,
  InboxIcon,
  UserIcon,
  ArrowRightCircleIcon,
  Table,
  ShoppingBagIcon,
  BuyIcon,
} from "@heroicons/react/24/solid";

function SidebarComponent() {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={ChartPieIcon}>
            Home Page
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={InboxIcon}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={UserIcon}>
            Friends
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={ShoppingBagIcon}>
            Marketplace
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={ArrowRightCircleIcon}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={Table}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={ChartPieIcon}>
            Upgrade to Pro
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={BuyIcon}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
export default SidebarComponent;
