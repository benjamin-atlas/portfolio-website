import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceItem = ({
  serviceName,
  serviceInfo,
  icon,
}: {
  serviceName: string;
  serviceInfo: string;
  icon: IconDefinition;
}) => {
  return (
    <div className="grid grid-cols-3 gap-8 font-poppin text-center md:text-left ">
      <div className="col-span-3 md:col-span-1 flex justify-center md:justify-end">
        <div className="bg-blue-500 rounded-full relative w-[50px] h-[50px] xl:w-[75px] xl:h-[75px] col-span-1">
          <FontAwesomeIcon
            icon={icon}
            className="text-2xl text-white absolute-center"
          ></FontAwesomeIcon>
        </div>
      </div>
      <div className="col-span-3 md:col-span-2 mb-4">
        <h3 className="text-lg font-semibold">{serviceName}</h3>
        <p className="text-base italic">{serviceInfo}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
