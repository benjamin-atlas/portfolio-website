import PortfolioItemInfo from "../interfaces/PortfolioItemInfo";
import kayak from "../../src/assets/kayak.jpg";

const PortfolioItem = ({
  portfolioItemInfo,
}: {
  portfolioItemInfo: PortfolioItemInfo;
}) => {
  return (
    <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-200 ease-in-out pt-10 pb-10 pl-24 pr-24 m-10 flex flex-col justify-center items-center font-poppins cursor-pointer">
      <div className="w-64 h-64 mb-5">
        <img src={kayak} className="w-full h-full object-contain"></img>
      </div>
      <h2 className="text-2xl mb-5">{portfolioItemInfo.title}</h2>
      <p className="italic font-thin">{portfolioItemInfo.description}</p>
    </div>
  );
};

export default PortfolioItem;
