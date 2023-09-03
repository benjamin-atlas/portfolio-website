import About from "./sections/About";
import Landing from "./sections/Landing";
import Resume from "./sections/Resume";
import Skills from "./sections/Skills";

const ScrollWindow = () => {
  return (
    <div id="scroll-window" className="col-span-10 bg-indigo-900">
      <Landing></Landing>
      <About></About>
      <Skills></Skills>
      <Resume></Resume>
    </div>
  );
};

export default ScrollWindow;
