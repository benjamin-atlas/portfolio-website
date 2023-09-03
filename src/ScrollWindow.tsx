import About from "./About";
import Landing from "./Landing";
import Resume from "./Resume";
import Skills from "./Skills";

const ScrollWindow = () => {
  return (
    <div className="col-span-10 bg-indigo-900">
      <Landing></Landing>
      <About></About>
      <Skills></Skills>
      <Resume></Resume>
    </div>
  );
};

export default ScrollWindow;
