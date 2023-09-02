import landingPic from "../src/assets/landing.jpg";
import SimulatedTypingText from "./SimulatedTypingText";

const Landing = () => {
  return (
    <div className="h-screen relative font-raleway">
      <img src={landingPic} className="object-cover w-full h-full" />
      <div className="text-white absolute-center w-1/2 pl-10 pr-10 text-right">
        <div className="text-7xl font-bold">Benjamin Atlas</div>
        <div className="text-4xl">
          <SimulatedTypingText
            prefix="I am a"
            words={[
              "developer.",
              "dog lover.",
              "loving husband.",
              "musician.",
              "cat dad.",
              "weightlifter.",
              "paddleboarder.",
              "snowboarder.",
              "'cool' uncle. (I wish)",
            ]}
          ></SimulatedTypingText>
        </div>
      </div>
    </div>
  );
};

export default Landing;
