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
    <div className="relative">
      <div className="info-panel absolute top-[10px] left-[10px] p-2 text-2xl z-10">
        My Portfolio
      </div>
      <div className="w-full h-[70vh]">
        <Slider {...settings} className="w-full h-full">
          <PortfolioItem
            portfolioItemInfo={{
              title: "arcc-Clinical",
              descriptionPoints: [
                "Angular web app used by thousands of doctors and clinicans across the United States and Canada for secure viewing and management of medical images. We built this application from the ground up in 2017 and since starting I have a role at every level, from UI/UX design to REST API development to database.",
                "As a development team lead, I contribute heavily to new features at all steps, from design to publish. I also have conducted well over a thousand code reviews. I actually have a reputation at work for having probably the most discerning eye in the review process.",
                "Apollo is curently doing a full UI overhaul of arcc-Clinical as we speak and we are getting very excited to share an even more modern, streamlined design!"
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
                "Webception. The very site you are visiting was a learning project in and of itself to brush up on my React chops and learn Tailwind. Personal projects are the one of the best ways to learning new tech and I'm constantly coding any weird ideas that come to mind.",
                "I also leveraged AWS tools such as Lambda and API Gateway to scrape and feed real-time metrics into this page via a websocket, which I think is ridiculously cool. You might actually see the values change in real-time if I'm actively working on something.",
              ],
              images: [portfolio1],
              technologiesUsed: [
                "Frontend: React",
                "Tailwind",
                "TypeScript",
                "ws (Websocket Library for NodeJS projects",
                "Backend (AWS): Lambda",
                "API Gateway",
                "DynamoDB",
                "CloudWatch Events",
                "EventBridge Scheduling",
                "Amplify Git-integrated Deployments",
              ],
              myRole: "Sole Developer",
            }}
          />
          <PortfolioItem
            portfolioItemInfo={{
              title: "Perfect Blackjack Strategy",
              descriptionPoints: [
                "At the time of writing, our development team at Apollo is preparing to go to AWS re:Invent 2023 in Las Vegas. One of my best friends (and team mate) and I have a running joke that we like to try to learn perfect blackjack strategy every few years.",
                "This year, I decided to make a tool to help us actually practice and learn. It isn't a fully-functioning blackjack simulator, its just meant to train the user to make the correct decision based on the hand. It tracks your high score and even has a nifty chart to reference as you learn!",
                "I also used this project as an excuse to learn Vue 3 and get some artsy-energy out. The design is heavily inspired by a game I love called Tunic, which is a low-poly puzzle platformer in an isometric perspective.",
                "I know the cards didn't have to isometric, but I do what I want. Try to beat my high score!"
              ],
              images: [blackjack1],
              technologiesUsed: [
                "Vue 3 (Composition)",
                "TypeScript",
                "Tailwind CSS",
                "Amplify Git-integrated Deployments",
              ],
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
          {/* <PortfolioItem
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
          /> */}
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
    </div>
  );
};

export default Portfolio;
