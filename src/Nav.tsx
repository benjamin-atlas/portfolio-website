import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFile,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import {
  faHouse,
  faBookOpen,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faSkype,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import profilePic from "../src/assets/profile.jpg";

import MenuItem from "./interfaces/MenuItem";
import SocialButton from "./interfaces/SocialButton";

const Nav = () => {
  const [menuItems, setMenuItems] = useState([
    {
      label: "Home",
      icon: faHouse,
      active: true,
      onClick: () => scrollToSection("landing-section"),
    },
    {
      label: "About",
      icon: faUser,
      active: false,
      onClick: () => scrollToSection("about-section"),
    },
    { label: "Resume", icon: faFile, active: false, onClick: () => {} },
    { label: "Portfolio", icon: faBookOpen, active: false, onClick: () => {} },
    { label: "Services", icon: faServer, active: false, onClick: () => {} },
    { label: "Contact", icon: faEnvelope, active: false, onClick: () => {} },
  ]);

  const socialButtons: SocialButton[] = [
    { link: "", icon: faTwitter },
    { link: "", icon: faFacebook },
    { link: "", icon: faInstagram },
    { link: "", icon: faSkype },
    { link: "", icon: faLinkedin },
  ];

  const setActiveMenuItem = (selectedMenuItem: MenuItem) => {
    setMenuItems(
      menuItems.map((menuItem: MenuItem) => ({
        ...menuItem,
        active: menuItem === selectedMenuItem,
      }))
    );
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="bg-black col-span-2 text-center font-poppins">
        <div className="rounded-full bg-indigo-50 h-[125px] w-[125px] text-black mt-5 mb-2 inline-block overflow-hidden border-8 border-gray-800">
          <img src={profilePic} />
        </div>
        <h1 className="text-2xl font-semibold mb-5">Ben Atlas</h1>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-5 gap-3 mb-10">
            {socialButtons.map((socialButton: SocialButton, index: number) => (
              <div
                key={index}
                className="col-span-1 cursor-pointer bg-gray-800 hover:bg-blue-400 transition duration-300 ease-in-out w-9 h-9 rounded-full flex justify-center items-center"
              >
                <FontAwesomeIcon icon={socialButton.icon}></FontAwesomeIcon>
              </div>
            ))}
          </div>
        </div>
        {menuItems.map((menuItem: MenuItem, index: number) => (
          <div
            key={index}
            className="group grid grid-cols-5 gap-x-4 mb-5 items-center font-sans text-gray-500 cursor-pointer"
            onClick={() => {
              menuItem.onClick();
              setActiveMenuItem(menuItem);
            }}
          >
            <div
              className={
                "col-span-1 text-right transition duration-200 ease-in-out group-hover:text-blue-400" +
                (menuItem.active ? " text-blue-400" : "")
              }
            >
              <FontAwesomeIcon icon={menuItem.icon}></FontAwesomeIcon>
            </div>
            <p
              className={
                "col-span-4 text-left transition duration-200 ease-in-out group-hover:text-white" +
                (menuItem.active ? " text-white" : "")
              }
            >
              {menuItem.label}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Nav;
