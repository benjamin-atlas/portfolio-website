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
            bulletItems: [
              { text: "970-689-8619", boldText: [""] },
              { text: "benjamin.s.atlas@gmail.com", boldText: [""] },
            ],
          }}
        />
        <p className="text-2xl font-bold mt-4 mb-4">Education</p>
        <ResumeItem
          resumeProps={{
            header: "Fairmont State University",
            subheader: "Bachelor of Science, Computer Science",
            timeFrame: "2012-2017",
            bulletItems: [
              { text: "Core CS GPA: 3.8", boldText: [""] },
              {
                text: "Minor: Computer Security Concentration",
                boldText: [""],
              },
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
              {
                text: "Designed and developed multiple large web applications used to securely manage hospital image archives using Angular, SCSS, and TypeScript.",
                boldText: ["Angular,", "SCSS,", "TypeScript."],
              },
              {
                text: "Created several Windows services that interface with medical devices for bulk ingestion of patient images using C# and the .NET Framework.",
                boldText: ["Windows services", "C#", ".NET", "Framework."],
              },
              {
                text: "Developed and maintained a cross-platform mobile application using Ionic, Capacitor, Angular, SCSS, and TypeScript.",
                boldText: [
                  "Ionic,",
                  "Capacitor,",
                  "Angular,",
                  "SCSS,",
                  "TypeScript.",
                ],
              },
              {
                text: "Heavily contributed to RESTful web services written in Visual Basic and the .NET Framework.",
                boldText: [
                  "RESTful",
                  "web",
                  "services",
                  "Visual",
                  "Basic",
                  ".NET",
                  "Framework",
                ],
              },
              {
                text: "Created and maintained hundreds of MS SQL Server database objects (tables, stored procedures, views, etc.).",
                boldText: ["MS", "SQL", "Server"],
              },
              {
                text: "Led a team consisting of eight highly-skilled developers.",
                boldText: [""],
              },
              {
                text: "Worked closely with the product management team to bring feature ideas to life via wireframes and prototypes.",
                boldText: ["wireframes", "prototypes."],
              },
              {
                text: "Participated heavily in code review for every in-house application via Github pull requests.",
                boldText: ["code", "review", "Github", "pull", "requests."],
              },
              {
                text: "Designed and led the development interview process for all prospective development team candidates.",
                boldText: ["development", "interview"],
              },
              {
                text: "Mentored all new developers and assisted with the onboarding process.",
                boldText: ["Mentored"],
              },
              {
                text: "Hosted training sessions for non-development staff regarding new features created by the development team.",
                boldText: ["training", "sessions"],
              },
              {
                text: "Extensively worked with the IT + Implementation team on identifying and resolving customer software issues.",
                boldText: ["identifying", "and", "resolving"],
              },
              {
                text: "Integrated several third-party softwares and libraries into our software system and worked closely with the representatives from their respective companies.",
                boldText: ["third-party", "softwares", "and", "libraries"],
              },
              {
                text: "Since March 2020, have been successfully performing all of the above responsibilities 100% remotely.",
                boldText: ["100%", "remotely"],
              },
            ],
          }}
        />
      </div>
    </MajorSection>
  );
};

export default Resume;
