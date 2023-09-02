import landingPic from "../src/assets/landing.jpg";

const Landing = () => {
  return (
    <div className="h-screen">
      <img src={landingPic} className="object-cover w-full h-full" />
    </div>
  );
};

export default Landing;
