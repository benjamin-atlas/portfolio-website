import { useEffect, useState } from "react";
import AboutInfo from "../interfaces/AboutInfo";
import ScrollTrigger from "../utilities/ScrollTrigger";
import StatCardInfo from "../interfaces/StatCardInfo";
import StatCard from "../utilities/StatCard";
import SectionHeader from "../utilities/SectionHeader";
import kayakPic from "../../src/assets/kayak.jpg";
import useWebSocket from "react-use-websocket";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCode,
  faCodeCommit,
  faCodePullRequest,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import MajorSection from "../utilities/MajorSection";

const About = () => {
  // TODO: Pretty incremental animation, maybe?
  const [yearsDeveloping, setYearsDeveloping] = useState(7);
  const [aboutInfo, _setAboutInfo] = useState([
    { label: "Phone", value: "970-689-8619" },
    { label: "City", value: "Fort Collins, CO" },
    { label: "Email", value: "benjamin.s.atlas@gmail.com" },
    {
      label: "Freelance",
      value: "Available, currently seeking opportunities!",
    },
    { label: "Degree", value: "Bachelor of Science, Computer Science" },
  ]);

  const [statCards, setStatCards]: [StatCardInfo[], Function] = useState([]);
  const [lastValues, setLastValues]: [any, Function] = useState({
    commits: 0,
    mergedPRs: 0,
    linesOfCodeWritten: 0,
    repositoriesContributed: 0,
  });

  const [lastUpdated, setLastUpdated]: [string, Function] = useState(getCurrentTime());

  const WS_URL: string = import.meta.env.VITE_WS_URL;
  const { sendJsonMessage } = useWebSocket(WS_URL, {
    onOpen: () => {
      sendJsonMessage({ action: "initial-metrics" });
    },
    onMessage: (msg: any) => {
      const msgJson: any = JSON.parse(msg.data);

      setLastValues(msgJson);

      if (!msgJson.error) {
        setLastUpdated(getCurrentTime())
        setStatCards([
          {
            icon: faCodeCommit,
            startValue: lastValues.commits,
            currentValue: msgJson.commits,
            description: `Commits to Github`,
          },
          {
            icon: faCode,
            startValue: lastValues.linesOfCodeWritten,
            currentValue: msgJson.linesOfCodeWritten,
            description: "Lines of code written.",
          },
          {
            icon: faCodePullRequest,
            startValue: lastValues.mergedPRs,
            currentValue: msgJson.mergedPRs,
            description: "Pull requests reviewed or merged",
          },
          {
            icon: faGithub,
            startValue: lastValues.repositoriesContributed,
            currentValue: msgJson.repositoriesContributed,
            description: "Repositories Contributed",
          },
        ]);
      } else {
        console.error(`Malformatted message received: ${msg}`);
      }
    },
  });

  useEffect(() => {
    setYearsDeveloping(getYearDifferenceFromDate("2017-01-01"));
  }, []);

  return (
    <MajorSection sectionName="about" header="About">
      <ScrollTrigger
        initialClassName="opacity-0 transition-opacity duration-[1000ms]"
        triggerClassName="opacity-100"
        triggerOnce={true}
      >
        <p className="pb-5 pr-10">
          My name is Benjamin Atlas. I am a professional software developer with{" "}
          {yearsDeveloping} years of professional full-stack development
          experience.
        </p>
      </ScrollTrigger>
      <ScrollTrigger
        initialClassName="opacity-0 transition-opacity duration-[1000ms] delay-[300ms]"
        triggerClassName="opacity-100"
        triggerOnce={true}
      >
        <p className="pb-5 pr-10">
          Software development is not just a career, but a thing of passion for
          me. I truly find great fulfillment in solving complex problems, making
          intuitive interfaces, and playing bug detective.
        </p>
      </ScrollTrigger>
      <ScrollTrigger
        initialClassName="opacity-0 transition-opacity duration-[1000ms] delay-[600ms]"
        triggerClassName="opacity-100"
        triggerOnce={true}
      >
        <div className="grid grid-cols-12 gap-8 pr-10 pb-10 pt-10">
          <div className="col-span-3 overflow-hidden">
            <img src={kayakPic} className="object-cover h-auto w-full" />
          </div>
          <div className="col-span-9">
            <h2 className="text-2xl font-bold mb-4">
              Full Stack Web Developer
            </h2>
            <p className="italic mb-8 text-lg">
              I have written multiple large-scale medical imaging applications
              at all levels of the development stack. Working most of my career
              from a small company, I have learned to wear multiple hats with
              mission-critical responsibilities as a front-end engineer,
              back-end engineer, software architect, dev ops coordinator, and
              mentor.
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
      </ScrollTrigger>
      <SectionHeader>Facts</SectionHeader>
      <p>
        I have worked collaboratively with dozens of extremely talented
        developers since 2017, heavily engaging in agile/scrum practices.
      </p>
      <div className="flex w-full pt-10 mb-10 grid grid-cols-4 gap-8">
        {statCards.map((statCardInfo: StatCardInfo, index: number) => (
          <div key={index} className="col-span-4 xl:col-span-2 2xl:col-span-1 justify-center">
            <StatCard statCardInfo={statCardInfo}></StatCard>
          </div>
        ))}
      </div>
      <p className="italic text-base">
        Note: these metrics are populated in real time via WebSockets hosted on
        AWS. If you see this move, I'm working on something. If not, hopefully
        I'm doing something fun! Last updated: {lastUpdated.toString()}
      </p>
    </MajorSection>
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

function getCurrentTime(): string {
  return new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
}

export default About;
