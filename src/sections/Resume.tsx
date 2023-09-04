import ResumeItem from "../utilities/ResumeItem";
import MajorSection from "../utilities/MajorSection";

const Resume = () => {
  return (
    <MajorSection sectionName="resume" header="Resume">
      <div className="w-1/2 inline-block">
        <p className="text-2xl font-bold mb-4">Summary</p>
        <ResumeItem
          resumeProps={{
            header: "Benjamin Atlas",
            subheader:
              "A passionate, full-stack developer obsessed with elegant abstractions, intuitive user interfaces, and squeaky-clean code",
            bulletItems: ["970-689-8619", "benjamin.s.atlas@gmail.com"],
          }}
        />
        <p className="text-2xl font-bold mt-4 mb-4">Education</p>
        <ResumeItem
          resumeProps={{
            header: "Fairmont State University",
            subheader: "Bachelor of Science, Computer Science",
            timeFrame: "2012-2017",
            bulletItems: [
              "Core CS GPA: 3.8",
              "Minor: Computer Security Concentration",
            ],
          }}
        />
      </div>
      <div className="w-1/2 inline-block align-top">
        <p className="text-2xl font-bold mb-4">Professional Experience</p>
        <ResumeItem
          resumeProps={{
            header: "Full Stack Development Team Lead",
            subheader: "Apollo Enterprise Imaging Corp.",
            timeFrame: "2017-Present",
            bulletItems: [
              "Designed and developed multiple large web applications used to securely manage hospital image archives using Angular, SCSS,  and TypeScript.",
              "Created several Windows services that interface with medical devices for bulk ingestion of patient images using C# and the .NET Framework.",
              "Developed and maintained a cross-platform mobile application using Ionic, Capacitor, Angular, SCSS, and TypeScript.",
              "Heavily contributed to RESTful web services written in Visual Basic and the .NET Framework.",
              "Created and maintained hundreds of MS SQL Server database objects (tables, stored procedures, views, etc.).",
              "Led a team consisting of eight highly-skilled developers.",
              "Worked closely with the product management team to bring feature ideas to life via wireframes and prototypes.",
              "Participated heavily in code review for every in-house application via Github pull requests.",
              "Designed and led the development interview process for all prospective development team candidates.",
              "Mentored all new developers and assisted with the onboarding process.",
              "Hosted training sessions for non-development staff regarding new features created by the development team.",
              "Extensively worked with the IT + Implementation team on identifying and resolving customer software issues.",
              "Integrated several third-party softwares and libraries into our software system and worked closely with the representatives from their respective companies.",
              "Since March 2020, have been successfully performing all of the above responsibilities 100% remotely.",
            ],
          }}
        />
      </div>
    </MajorSection>
  );
};

export default Resume;
