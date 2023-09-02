import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";

const About = () => {
  // TODO: Pretty incremental animation, maybe?
  const [yearsDeveloping, setYearsDeveloping] = useState(7);

  useEffect(() => {
    setYearsDeveloping(getYearDifferenceFromDate("2017-01-01"));
  }, []);

  return (
    <section className="relative bg-white text-black font-raleway w-full">
      <SectionHeader>About</SectionHeader>
      <p className="ml-10 pb-5 pr-10">
        My name is Benjamin Atlas. I am a professional software developer with{" "}
        {yearsDeveloping} years of professional full-stack development
        experience.
      </p>
      <p className="ml-10 pb-5 pr-10">
        I have written multiple large-scale medical imaging applications at all
        levels of the tech stack. Working most of my career from a small
        company, I have learned to wear multiple hats with responsibilities as a
        front-end engineer, back-end engineer, software architect, dev ops
        coordinator, and mentor.
      </p>
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
