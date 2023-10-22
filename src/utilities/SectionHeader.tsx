const SectionHeader = (props: { children: string }) => {
  return (
    <>
      <div className="pt-10 text-2xl md:text-4xl font-bold">{props.children}</div>
      <div className="mt-5 mb-5 border-b-4 border-blue-400 w-[50px]"></div>
    </>
  );
};

export default SectionHeader;
