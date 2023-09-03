import ResumeProps from "../interfaces/ResumeProps";

const ResumeItem = (props: { resumeProps: ResumeProps }) => {
  return (
    <div className="font-poppins font-thin border-l-4 border-blue-400 pl-4 relative">
      <div className="rounded-full w-[20px] h-[20px] border-4 border-blue-400 absolute top-0 left-[-2px] translate-x-[-50%] bg-white"></div>
      <div className="mb-3 font-semibold">{props.resumeProps.header}</div>
      <div className="italic mb-3 text-lg">{props.resumeProps.subheader}</div>
      <div className="p-3 mb-3 bg-blue-200 inline-block font-normal text-sm">
        {props.resumeProps.timeFrame}
      </div>
      <ul className="list-disc ml-10">
        {props.resumeProps.bulletItems.map((item: string, index: number) => (
          <li key={index} className="text text-lg">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeItem;
