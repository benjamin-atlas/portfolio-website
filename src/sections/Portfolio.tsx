import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import PortfolioItem from "../utilities/PortfolioItem";

import clinical1 from "../../src/assets/clinical-1.png";
import blackjack1 from "../../src/assets/blackjack-1.png";
import portfolio1 from "../../src/assets/portfolio-1.png";

const Portfolio = () => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="portfolio-section" className="relative">
      <div className="info-panel absolute top-[10px] right-[10px] p-2 text-2xl z-10">
        My Portfolio
      </div>
      <div className="w-full h-[90vh] md:h-[70vh] ">
        <Slider {...settings} className="w-full h-full">
          <PortfolioItem
            portfolioItemInfo={{
              title: "arcc-Clinical",
              descriptionPoints: [
                "Angular web app used by thousands of doctors and clinicans across the United States and Canada for secure viewing and management of medical images. We built this application from the ground up in 2017 and since starting I have a role at every level, from UI/UX design to REST API development to database.",
                "As a development team lead, I contribute heavily to new features at all steps, from design to publish. I also have conducted well over a thousand code reviews. I actually have a reputation at work for having probably the most discerning eye in the review process."
              ],
              images: [
                { fullQualityPath: clinical1, mobileQualityPath: clinical1 },
              ],
              technologiesUsed: [
                "Angular",
                "SCSS",
                "TypeScript",
                "VB.NET",
                "SQL Server",
              ],
              teamSize: "Over a dozen developers.",
              myRole: "Development Team Lead",
              link: "https://apolloei.com/",
            }}
          />
          <PortfolioItem
            portfolioItemInfo={{
              title: "This Website ☝️🤯",
              descriptionPoints: [
                "Webception. The very site you are visiting was a learning project in and of itself to brush up on my React chops and learn Tailwind. Personal projects are the one of the best ways to learning new tech and I'm constantly coding any weird ideas that come to mind.",
                "I also leveraged AWS tools such as Lambda and API Gateway to scrape and feed real-time metrics into this page via a websocket, which I think is ridiculously cool. You might actually see the values change in real-time if I'm actively working on something.",
              ],
              images: [
                { fullQualityPath: portfolio1, mobileQualityPath: portfolio1 },
              ],
              technologiesUsed: [
                "Frontend: React",
                "Tailwind",
                "TypeScript",
                "ws (Websocket Library for NodeJS projects)",
                "Backend (AWS): Lambda",
                "API Gateway",
                "DynamoDB",
                "CloudWatch Events",
                "EventBridge Scheduling",
                "Amplify Git-integrated Deployments",
              ],
              myRole: "Sole Developer",
              link: "https://github.com/benjamin-atlas/portfolio-website/"
            }}
          />
          <PortfolioItem
            portfolioItemInfo={{
              title: "Perfect Blackjack Strategy",
              descriptionPoints: [
                "At the time of writing, our development team at Apollo is preparing to go to AWS re:Invent 2023 in Las Vegas. One of my best friends (and team mate) and I have a running joke that we like to try to learn perfect blackjack strategy every few years. This year, I decided to make a tool to help us actually practice and learn. It tracks your high score and even has a nifty chart to reference as you learn!",
                "I also used this project as an outlet to learn Vue 3 and get some artsy-energy out. The design is heavily inspired by a game I love called Tunic, which is a low-poly puzzle platformer in an isometric perspective.",
                "I know the cards didn't have to be isometric, but I do what I want. Try to beat my high score!",
              ],
              images: [
                { fullQualityPath: blackjack1, mobileQualityPath: blackjack1 },
              ],
              technologiesUsed: [
                "Vue 3",
                "TypeScript",
                "Tailwind CSS",
                "Amplify Git-integrated Deployments",
              ],
              myRole: "Sole Developer",
              link: "https://blackjack.benjaminatlas.dev/",
            }}
          />
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;
