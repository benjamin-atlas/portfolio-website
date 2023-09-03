import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StatCardInfo from "../interfaces/StatCardInfo";

const StatCard = (props: { statCardInfo: StatCardInfo }) => {
  return (
    <div className="grid grid-cols-3 gap-4 font-sans">
      <div className="col-span-1 text-blue-400 text-7xl text-right">
        <FontAwesomeIcon icon={props.statCardInfo.icon}></FontAwesomeIcon>
      </div>
      <div className="col-span-2">
        <div className="text-6xl font-extrabold">
          {props.statCardInfo.value}
        </div>
        <div className="text-lg">{props.statCardInfo.description}</div>
      </div>
    </div>
  );
};

export default StatCard;
