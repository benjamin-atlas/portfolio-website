import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StatCardInfo from "../interfaces/StatCardInfo";
import CountUp from "react-countup";
import ScrollTrigger from "./ScrollTrigger";

const StatCard = ({ statCardInfo }: { statCardInfo: StatCardInfo }) => {
  return (
    <div className="grid grid-cols-3 gap-4 font-sans">
      <div className="col-span-1 text-blue-400 text-7xl text-right">
        <FontAwesomeIcon icon={statCardInfo.icon}></FontAwesomeIcon>
      </div>
      <div className="col-span-2">
        <CountUp
          end={statCardInfo.currentValue}
          duration={3}
          startVal={statCardInfo.startValue}
        >
          {({ countUpRef, start }) => (
            <ScrollTrigger triggerOnce={true} onScrollStateChanged={start}>
              <span ref={countUpRef} className="text-6xl font-extrabold"></span>
            </ScrollTrigger>
          )}
        </CountUp>
        <div className="text-lg">{statCardInfo.description}</div>
      </div>
    </div>
  );
};

export default StatCard;
