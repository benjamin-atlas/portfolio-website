import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StatCardInfo from "../interfaces/StatCardInfo";
import CountUp from "react-countup";
import ScrollTrigger from "./ScrollTrigger";

const StatCard = ({ statCardInfo }: { statCardInfo: StatCardInfo }) => {
  return (
    <div className="grid grid-cols-5 gap-4 font-sans">
      <div className="col-span-1 text-blue-400 text-4xl text-right">
        <FontAwesomeIcon icon={statCardInfo.icon}></FontAwesomeIcon>
      </div>
      <div className="col-span-4">
        <CountUp
          end={statCardInfo.currentValue}
          duration={3}
          start={statCardInfo.startValue}
        >
          {({ countUpRef, start }) => (
            <ScrollTrigger triggerOnce={true} onScrollStateChanged={start}>
              <span ref={countUpRef} className="text-4xl md:text-5xl font-extrabold"></span>
            </ScrollTrigger>
          )}
        </CountUp>
        <div className="text-base md:text-lg">{statCardInfo.description}</div>
      </div>
    </div>
  );
};

export default StatCard;
