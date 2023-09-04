import { useState } from "react";
import {
  faDesktop,
  faArrowRightArrowLeft,
  faPeopleGroup,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { faAngular, faWindows } from "@fortawesome/free-brands-svg-icons";
import MajorSection from "../utilities/MajorSection";
import ServiceItem from "../utilities/ServiceItem";
import ServiceInfo from "../interfaces/ServiceInfo";

const Services = () => {
  const [services, _setServices] = useState([
    {
      serviceName: "Angular Development",
      serviceInfo:
        "Highly knowledgeable in the Angular Framework and fully capable of contributing to existing projects or building new ones from the ground up.",
      icon: faAngular,
    },
    {
      serviceName: "UI/UX Design",
      serviceInfo:
        "Creating sharp, intuitive interfaces to model your data in the way that best suits your user interaction.",
      icon: faDesktop,
    },
    {
      serviceName: "RESTful APIs",
      serviceInfo:
        "Can build adapters for your data to be safely consumed in an authenticated manner.",
      icon: faArrowRightArrowLeft,
    },
    {
      serviceName: "Mobile Development",
      serviceInfo:
        "Build responsive, cross-platform applications that cast a wide-net of users on multiple different device types.",
      icon: faMobileScreen,
    },
    {
      serviceName: "Windows Desktop Development",
      serviceInfo:
        "Well-versed in C#/VB.NET and MS SQL Server. Have created dozens of desktop applications and middleware services",
      icon: faWindows,
    },
    {
      serviceName: "Effective Leadership + Communication",
      serviceInfo:
        "Having acted as a project/team lead for over half a decade now, can be trusted to communicate deadlines clearly and realistically while managing expectations and achieving on-time delivery.",
      icon: faPeopleGroup,
    },
  ]);
  return (
    <MajorSection sectionName="services" header="Services">
      <div className="grid grid-cols-3 gap-4">
        {services.map((service: ServiceInfo, index: number) => (
          <ServiceItem
            key={index}
            serviceName={service.serviceName}
            serviceInfo={service.serviceInfo}
            icon={service.icon}
          ></ServiceItem>
        ))}
      </div>
    </MajorSection>
  );
};

export default Services;
