const SectionHeader = (props: { children: string }) => {
  return (
    <>
      <div className="ml-10 pt-10 text-3xl font-bold">{props.children}</div>
      <div className="ml-10 mt-5 mb-5 border-b-4 border-blue-400 w-[50px]"></div>
    </>
  );
};

export default SectionHeader;
