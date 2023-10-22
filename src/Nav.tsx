import { useState, useEffect } from "react";

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
  faBars,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import profilePic from "../src/assets/profile.jpg";

import MenuItem from "./interfaces/MenuItem";
import SocialButton from "./interfaces/SocialButton";

import Resume from "./assets/Resume.pdf";

const Nav = () => {
  const [menuItems, setMenuItems]: [MenuItem[], any] = useState([
    {
      label: "Home",
      icon: faHouse,
      active: true,
      id: "landing-section",
      onClick: () => scrollToSection("landing-section"),
    },
    {
      label: "About",
      icon: faUser,
      active: false,
      id: "about-section",
      onClick: () => scrollToSection("about-section"),
    },
    {
      label: "Resume",
      icon: faFile,
      active: false,
      id: "resume-section",
      onClick: () => scrollToSection("resume-section"),
    },
    {
      label: "Portfolio",
      icon: faBookOpen,
      active: false,
      id: "portfolio-section",
      onClick: () => scrollToSection("portfolio-section"),
    },
    {
      label: "Services",
      icon: faServer,
      active: false,
      id: "services-section",
      onClick: () => scrollToSection("services-section"),
    },
    {
      label: "Contact",
      icon: faEnvelope,
      active: false,
      id: "contact-section",
      onClick: () => scrollToSection("contact-section"),
    },
  ]);

  const [mobileNavShowing, setMobileNavShowing]: [boolean, any] =
    useState(false);

  const socialButtons: SocialButton[] = [
    { link: "https://github.com/benjamin-atlas/", icon: faGithub },
    {
      link: "https://www.linkedin.com/in/benjamin-atlas-aa44a5121/",
      icon: faLinkedin,
    },
    { link: Resume, icon: faFile },
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
    setMobileNavShowing(false);
    const section: HTMLElement | null = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          const targetId: string | null = entry.target.getAttribute("id");

          if (entry.isIntersecting) {
            const scrolledMenuItem: MenuItem | undefined = menuItems.find(
              (item) => item.id === targetId
            );
            if (scrolledMenuItem) {
              setActiveMenuItem(scrolledMenuItem);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <>
      <div
        className="fixed top-2 left-2 xl:hidden z-30 text-2xl info-panel p-3 rounded-full"
        onClick={() => setMobileNavShowing(!mobileNavShowing)}
      >
        <FontAwesomeIcon
          icon={mobileNavShowing ? faArrowLeft : faBars}
        ></FontAwesomeIcon>
      </div>
      <div
        className={`bg-black col-span-2 text-center font-poppins justify-center ${
          mobileNavShowing
            ? "fixed top-0 left-[0%] w-[80%] md:w-[50%] xl:w-full h-full z-20 flex"
            : "fixed xl:relative top-0 h-full w-[80%] md:w-[50%] xl:w-full left-[-100%] xl:left-0 z-20"
        } xl:flex`}
        style={{ transition: "left 100ms ease-in-out" }}
      >
        <div className="fixed top-[50%] translate-y-[-50%]">
          <div className="rounded-full bg-indigo-50 h-[125px] w-[125px] text-black mt-5 mb-2 inline-block overflow-hidden border-8 border-gray-800">
            <img src={profilePic} />
          </div>
          <h1 className="text-2xl font-semibold mb-5">Ben Atlas</h1>
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-3 gap-3 mb-10">
              {socialButtons.map(
                (socialButton: SocialButton, index: number) => (
                  <a
                    key={index}
                    className="col-span-1 cursor-pointer bg-gray-800 hover:bg-blue-400 transition duration-300 ease-in-out w-9 h-9 rounded-full flex justify-center items-center"
                    href={socialButton.link}
                  >
                    <FontAwesomeIcon icon={socialButton.icon}></FontAwesomeIcon>
                  </a>
                )
              )}
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
      </div>
    </>
  );
};

export default Nav;
