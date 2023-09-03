import { useEffect, useState } from "react";
import AboutInfo from "./interfaces/AboutInfo";
import SectionHeader from "./SectionHeader";
import kayakPic from "../src/assets/kayak.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  // TODO: Pretty incremental animation, maybe?
  const [yearsDeveloping, setYearsDeveloping] = useState(7);
  const [aboutInfo, _setAboutInfo] = useState([
    { label: "Phone", value: "970-689-8619" },
    { label: "City", value: "Fort Collins, CO" },
    { label: "Email", value: "benjamin.s.atlas@gmail.com" },
    { label: "Freelance", value: "Available" },
    { label: "Degree", value: "Bachelor of Science, Computer Science" },
  ]);

  useEffect(() => {
    setYearsDeveloping(getYearDifferenceFromDate("2017-01-01"));
  }, []);

  return (
    <section
      id="about-section"
      className="relative bg-white text-black font-raleway w-full text-xl"
    >
      <SectionHeader>About</SectionHeader>
      {
        // TODO: make these fade in nicely.
      }
      <p className="ml-10 pb-5 pr-10">
        My name is Benjamin Atlas. I am a professional software developer with{" "}
        {yearsDeveloping} years of professional full-stack development
        experience.
      </p>
      <p className="ml-10 pb-5 pr-10">
        Software development is not just a career, but a thing of passion for
        me. I truly find great fulfillment in solving complex problems, making
        intuitive interfaces, and playing bug detective.
      </p>
      <div className="grid grid-cols-12 gap-8 ml-10 pr-10 pb-10">
        <div className="col-span-3 overflow-hidden">
          <img src={kayakPic} className="object-cover h-auto w-full" />
        </div>
        <div className="col-span-9">
          <h2 className="text-2xl font-bold mb-4">Full Stack Web Developer</h2>
          <p className="italic mb-8 text-lg">
            I have written multiple large-scale medical imaging applications at
            all levels of the development stack. Working most of my career from
            a small company, I have learned to wear multiple hats with
            mission-critical responsibilities as a front-end engineer, back-end
            engineer, software architect, dev ops coordinator, and mentor.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {aboutInfo.map((aboutInfo: AboutInfo, index: number) => (
              <div key={index}>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="mr-3 text-blue-400"
                />
                <label className="inline font-semibold">
                  {aboutInfo.label}:
                </label>
                <p className="inline ml-5">{aboutInfo.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function getYearDifferenceFromDate(dateString: string) {
  const givenDate = new Date(dateString);
  const currentDate = new Date();
  const timeDifference: number = currentDate.getTime() - givenDate.getTime();
  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const yearsDifference = timeDifference / millisecondsPerYear;

  return Math.floor(yearsDifference);
}

export default About;
