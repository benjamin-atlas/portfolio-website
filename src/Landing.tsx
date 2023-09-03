import SimulatedTypingText from "./utilities/SimulatedTypingText";

const Landing = () => {
  return (
    <section
      id="landing-section"
      className="h-screen relative font-raleway bg-landing bg-center bg-cover bg-no-repeat bg-fixed"
    >
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
    </section>
  );
};

export default Landing;
