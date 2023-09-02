import About from "./About";
import Landing from "./Landing";

const ScrollWindow = () => {
  return (
    <div className="col-span-10 bg-indigo-900">
      <Landing></Landing>
      <About></About>
    </div>
  );
};

export default ScrollWindow;
