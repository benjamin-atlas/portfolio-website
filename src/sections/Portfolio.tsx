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
              title: "Jeff Nippard Workout Tracker",
              description: "App that I use to track my crap",
              images: [],
            }}
          />
          <PortfolioItem
            portfolioItemInfo={{
              title: "arcc-Clinical",
              description: "Medical image archiving thingy",
              images: [],
            }}
          />
          <PortfolioItem
            portfolioItemInfo={{
              title: "Rap God",
              description: "Rap app",
              images: [],
            }}
          />
          <PortfolioItem
            portfolioItemInfo={{
              title: "arcc-Mobile",
              description: "Yeah yeah yeah!",
              images: [],
            }}
          />
          <PortfolioItem
            portfolioItemInfo={{
              title: "File Mover",
              description: "Bloop",
              images: [],
            }}
          />
          <PortfolioItem
            portfolioItemInfo={{
              title: "Dicom Ingester",
              description: "jeioawfjoipwan",
              images: [],
            }}
          />
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;
