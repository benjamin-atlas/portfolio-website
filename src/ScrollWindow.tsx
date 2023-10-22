import About from "./sections/About";
import Landing from "./sections/Landing";
import Portfolio from "./sections/Portfolio";
import Resume from "./sections/Resume";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";

const ScrollWindow = () => {
  return (
    <div id="scroll-window" className="col-span-12 xl:col-span-10 bg-indigo-900 overflow-x-hidden">
      <Landing></Landing>
      <About></About>
      <Skills></Skills>
      <Resume></Resume>
      <Portfolio></Portfolio>
      <Services></Services>
      <Contact></Contact>
    </div>
  );
};

export default ScrollWindow;
