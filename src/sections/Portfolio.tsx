import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import PortfolioItem from "../utilities/PortfolioItem";
import MajorSection from "../utilities/MajorSection";

import clinical1 from "../../src/assets/clinical-1.png";

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <MajorSection
      sectionName="portfolio"
      header="Portfolio"
      bgColor="bg-blue-100"
    >
      <div>
        <Slider {...settings}>
          <PortfolioItem
            portfolioItemInfo={{
              title: "arcc-Clinical",
              descriptionPoints: [
                "Angular web app used by thousands of doctors and clinicans across the United States and Canada for secure viewing and management of medical images.",
                "We built this application from the ground up in 2017 and since starting I have a role at every level, from UI/UX design to REST API development to database.",
              ],
              images: [clinical1],
              technologiesUsed: [
                "Angular",
                "SCSS",
                "TypeScript",
                "VB.NET",
                "SQL Server",
              ],
              teamSize: "Over a dozen developers.",
              myRole: "Development Team Lead",
            }}
          />
          <PortfolioItem
            portfolioItemInfo={{
              title: "This Website ☝️🤯",
              descriptionPoints: [
                "Webception. The very site you are visiting was a learning project in and of itself to brush up on React and learn Tailwind. Personal projects are a great jumping off point for learning new-to-you tech.",
              ],
              images: [],
              technologiesUsed: [],
              myRole: "Sole Developer",
            }}
          />
          {/* <PortfolioItem
            portfolioItemInfo={{
              title: "Rap God",
              descriptionPoints: ["Rap app",],
              images: [],
              technologiesUsed: [],
              myRole: "Sole Developer",
            }}
          /> */}
          <PortfolioItem
            portfolioItemInfo={{
              title: "arcc-Mobile",
              descriptionPoints: ["Yeah yeah yeah!"],
              images: [],
              technologiesUsed: [],
              teamSize: "5 developers",
              myRole: "Development Team Lead",
            }}
          />
          <PortfolioItem
            portfolioItemInfo={{
              title: "Workout Tracker",
              descriptionPoints: [
                "Ionic mobile app used for simple data entry based on programs from popular fitness influencer, Jeff Nippard. I literally use it every day (not joking). Lets the user track each day's workout schedule and save information like volume and rate of perceived exertion (RPE)",
              ],
              images: [],
              technologiesUsed: [],
              myRole: "Sole Developer",
            }}
          />
          {/* <PortfolioItem
            portfolioItemInfo={{
              title: "File Mover",
              descriptionPoints: ["Bloop",],
              images: [],
              technologiesUsed: [],
              teamSize: "5 developers",
              myRole: "Project Owner",
            }}
          />
          <PortfolioItem
            portfolioItemInfo={{
              title: "Dicom Ingester",
              descriptionPoints: ["",],
              images: [],
              technologiesUsed: [],
              teamSize: "2 developers",
            }}
          /> */}
        </Slider>
      </div>
    </MajorSection>
  );
};

export default Portfolio;
