import PortfolioItemInfo from "../interfaces/PortfolioItemInfo";
import kayak from "../../src/assets/kayak.jpg";

const PortfolioItem = ({
  portfolioItemInfo,
}: {
  portfolioItemInfo: PortfolioItemInfo;
}) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-200 ease-in-out pt-10 pb-10 pl-24 pr-24 m-10 font-poppins cursor-grab">
        <div className="w-96 h-96 mb-5">
          <img src={kayak} className="w-full h-full object-contain"></img>
        </div>
        <div className="col-span-2">
          <h2 className="text-2xl mb-5">{portfolioItemInfo.title}</h2>
          <p className="italic font-thin text-base">
            {portfolioItemInfo.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;
