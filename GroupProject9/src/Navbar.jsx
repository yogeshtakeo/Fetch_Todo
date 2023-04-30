import React, { Component } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

function NavbarComponent() {
  return (
    <div className="w-fit">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Social Media
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                Bonnie@socialmedia.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Account Settings</Dropdown.Item>
            <Dropdown.Item>Privacy Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">FYP</Navbar.Link>
          <Navbar.Link href="/navbars">Explore</Navbar.Link>
          <Navbar.Link href="/navbars">Subscription</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default NavbarComponent;
