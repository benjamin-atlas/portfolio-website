import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import SectionHeader from "../utilities/SectionHeader";
import PortfolioItem from "../utilities/PortfolioItem";

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <section
      id="portfolio-section"
      className="relative bg-blue-100 text-black font-raleway w-full text-xl pl-10 pr-10"
    >
      <SectionHeader>Portfolio</SectionHeader>
      <div className="pb-10">
        <Slider {...settings}>
          <PortfolioItem
            portfolioItemInfo={{
              title: "arcc-Clinical",
              description:
                "Angular web app used by thousands of doctors and clinicans across the United States and Canada for secure viewing and management of medical images.",
              images: [],
              technologiesUsed: [],
              teamSize: "Over a dozen developers.",
            }}
          />
          <PortfolioItem
            portfolioItemInfo={{
              title: "Jeff Nippard Workout Tracker",
              description:
                "Ionic mobile app used for simple data entry based on programs from popular fitness influencer, Jeff Nippard. I literally use it every day (not joking). Lets the user track each day's workout schedule and save information like volume and rate of perceived exertion (RPE)",
              images: [],
              technologiesUsed: [],
              teamSize: "Solo",
            }}
          />
          <PortfolioItem
            portfolioItemInfo={{
              title: "This Website ☝️🤯",
              description:
                "Webception. The very site you are visiting was a learning project in and of itself to brush up on React and learn Tailwind. Personal projects are a great jumping off point for learning new-to-you tech.",
              images: [],
              technologiesUsed: [],
              teamSize: "Solo",
            }}
          />
          <PortfolioItem
            portfolioItemInfo={{
              title: "Rap God",
              description: "Rap app",
              images: [],
              technologiesUsed: [],
              teamSize: "Solo",
            }}
          />
          <PortfolioItem
            portfolioItemInfo={{
              title: "arcc-Mobile",
              description: "Yeah yeah yeah!",
              images: [],
              technologiesUsed: [],
              teamSize: "5 developers",
            }}
          />
          <PortfolioItem
            portfolioItemInfo={{
              title: "File Mover",
              description: "Bloop",
              images: [],
              technologiesUsed: [],
              teamSize: "5 developers",
            }}
          />
          <PortfolioItem
            portfolioItemInfo={{
              title: "Dicom Ingester",
              description: "2 developers",
              images: [],
              technologiesUsed: [],
              teamSize: "Solo",
            }}
          />
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;
