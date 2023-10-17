import SimulatedTypingText from "../utilities/SimulatedTypingText";
import landingPic from "../../src/assets/landing.jpg";

const Landing = () => {
  return (
    <section
      id="landing-section"
      className={`h-screen relative font-raleway bg-center bg-cover bg-no-repeat bg-fixed`}
      style={{ backgroundImage: `url(${landingPic})` }}
    >
      <div className="text-white absolute-center w-[75%] pl-10 pr-10 text-right">
        <div className="text-7xl font-bold">Benjamin Atlas</div>
        <div className="text-5xl">
          <SimulatedTypingText
            prefix="I am a"
            words={[
              "developer.",
              "dog lover.",
              "loving husband.",
              "musician.",
              "cat dad.",
              "weightlifter.",
              "paddleboard enthusiast.",
              "newfound snowboarder.",
              "'cool' uncle. (I wish).",
              "kitchen gadget nerd.",
            ]}
          ></SimulatedTypingText>
        </div>
      </div>
    </section>
  );
};

export default Landing;
