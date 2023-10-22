import SectionHeader from "./SectionHeader";

const MajorSection = ({
  sectionName,
  bgColor,
  header,
  children,
}: {
  sectionName: string;
  bgColor?: string;
  header: string;
  children: any;
}) => {
  return (
    <section
      id={`${sectionName}-section`}
      className={`relative ${
        bgColor ? bgColor : "bg-white"
      } text-black font-raleway w-full text-lg md:text-xl pl-4 pr-4 md:pl-16 md:pr-16 2xl:pl-32 2xl:pr-32 pb-10`}
    >
      <SectionHeader>{header}</SectionHeader>
      {children}
    </section>
  );
};

export default MajorSection;
