import {
  faHouse,
  faPerson,
  faFile,
  faBookOpen,
  faServer,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faSkype,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItem from "./interfaces/MenuItem";
import SocialButton from "./interfaces/SocialButton";

const Nav = () => {
  const menuItems: MenuItem[] = [
    { label: "Home", icon: faHouse, onClick: () => {} },
    { label: "About", icon: faPerson, onClick: () => {} },
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
      <div className="bg-black col-span-2 text-center">
        <div className="rounded-full bg-indigo-50 h-[100px] w-[100px] text-black mt-5 inline-block">
          <p>Me</p>
        </div>
        <h1>Benjamin Atlas</h1>
        <div className="grid grid-cols-5">
          {socialButtons.map((socialButton: SocialButton, index: number) => (
            <div
              key={index}
              className="col-span-1 bg-gray-500 w-10 h-10 rounded-full flex justify-center items-center"
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
