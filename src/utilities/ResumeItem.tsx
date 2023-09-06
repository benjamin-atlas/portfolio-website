import ResumeBulletItem from "../interfaces/ResumeBulletItem";
import ResumeProps from "../interfaces/ResumeProps";
import BoldTextInString from "./BoldTextInString";
import ScrollTrigger from "./ScrollTrigger";

const ResumeItem = (props: { resumeProps: ResumeProps }) => {
  return (
    <div className="font-poppins font-thin border-l-4 border-blue-400 pl-4 pr-4 relative">
      <ScrollTrigger
        initialClassName="rounded-full w-[20px] h-[20px] border-4 border-blue-400 absolute top-[100%] transition-[top] duration-[1000ms] ease-in-out left-[-2px] translate-x-[-50%] bg-white"
        triggerStyles={{ top: "0%" }}
      ></ScrollTrigger>
      <div className="mb-3 font-semibold">{props.resumeProps.header}</div>
      <div className="italic mb-3 text-base">{props.resumeProps.subheader}</div>
      {props.resumeProps.timeFrame && (
        <div className="p-3 mb-3 bg-blue-200 inline-block font-normal text-sm">
          {props.resumeProps.timeFrame}
        </div>
      )}
      <ul className="list-disc ml-10">
        {props.resumeProps.bulletItems.map(
          (item: ResumeBulletItem, index: number) => (
            <li key={index} className="text text-base mb-2">
              <BoldTextInString
                text={item.text}
                boldText={item.boldText}
              ></BoldTextInString>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ResumeItem;
