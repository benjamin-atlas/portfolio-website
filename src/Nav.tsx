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
  const menuItems: MenuItem[] = [
    { label: "Home", icon: faHouse, onClick: () => {} },
    { label: "About", icon: faUser, onClick: () => {} },
    { label: "Resume", icon: faFile, onClick: () => {} },
    { label: "Portfolio", icon: faBookOpen, onClick: () => {} },
    { label: "Services", icon: faServer, onClick: () => {} },
    { label: "Contact", icon: faEnvelope, onClick: () => {} },
  ];

  const socialButtons: SocialButton[] = [
    { link: "", icon: faTwitter },
    { link: "", icon: faFacebook },
    { link: "", icon: faInstagram },
    { link: "", icon: faSkype },
    { link: "", icon: faLinkedin },
  ];

  return (
    <>
      <div className="bg-black col-span-2 text-center font-poppins">
        <div className="rounded-full bg-indigo-50 h-[125px] w-[125px] text-black mt-5 mb-2 inline-block overflow-hidden border-8 border-gray-800">
          <img src={profilePic} />
        </div>
        <h1 className="text-2xl font-semibold mb-2">Ben Atlas</h1>
        <div className="grid grid-cols-5 ml-8 mr-8 mb-2">
          {socialButtons.map((socialButton: SocialButton, index: number) => (
            <div
              key={index}
              className="col-span-1 bg-gray-800 w-9 h-9 rounded-full flex justify-center items-center"
            >
              <FontAwesomeIcon icon={socialButton.icon}></FontAwesomeIcon>
            </div>
          ))}
        </div>
        {menuItems.map((menuItem: MenuItem, index: number) => (
          <div key={index} className="grid grid-cols-5 items-center">
            <div className="col-span-2">
              <FontAwesomeIcon icon={menuItem.icon}></FontAwesomeIcon>
            </div>
            <p className="col-span-3 text-left">{menuItem.label}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Nav;
