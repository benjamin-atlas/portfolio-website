import SkillInfo from "../interfaces/SkillInfo";
import ScrollTrigger from "./ScrollTrigger";

const SkillBar = (props: { skillInfo: SkillInfo }) => {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2 font-poppins">
      <label className="col-span-1 text-sm font-semibold">
        {props.skillInfo.name}
      </label>
      <label className="col-span-1 text-right text-sm font-semibold">
        {props.skillInfo.percentage}%
      </label>
      <div className="bg-blue-200 col-span-2 w-full h-[12px] relative">
        <ScrollTrigger
          initialClassName="bg-blue-500 col-span-2 h-[12px] absolute top-0 left-0 transition-[width] duration-500 ease-out"
          initialStyles={{ width: "0%" }}
          triggerStyles={{ width: props.skillInfo.percentage + "%" }}
        ></ScrollTrigger>
      </div>
    </div>
  );
};

export default SkillBar;
