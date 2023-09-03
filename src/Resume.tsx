import SectionHeader from "./utilities/SectionHeader";
import ResumeItem from "./utilities/ResumeItem";

const Resume = () => {
  return (
    <section
      id="resume-section"
      className="relative bg-white text-black font-raleway w-full text-xl pl-10"
    >
      <SectionHeader>Resume</SectionHeader>

      <div className="w-1/2 inline-block">
        <p className="text-2xl font-bold mb-4">Summary</p>
        <ResumeItem
          resumeProps={{
            header: "Benjamin Atlas",
            subheader: "Really cool dude",
            timeFrame: "1993 - 2023",
            bulletItems: ["970-689-8619", "benjamin.s.atlas@gmail.com"],
          }}
        />
        <p className="text-2xl font-bold mt-4 mb-4">Education</p>
        <ResumeItem
          resumeProps={{
            header: "Fairmont Statue University",
            subheader: "Bachelor of Science, Computer Science",
            timeFrame: "2012-2017",
            bulletItems: ["one", "two", "three"],
          }}
        />
      </div>
      <div className="width-1/2 inline-block align-top">
        <p className="text-2xl font-bold mb-4">Professional Experience</p>
        <ResumeItem
          resumeProps={{
            header: "Full Stack Development Team Lead",
            subheader: "Apollo Enterprise Imaging Corp.",
            timeFrame: "2017-Present",
            bulletItems: ["one", "two", "three"],
          }}
        />
      </div>
    </section>
  );
};

export default Resume;
