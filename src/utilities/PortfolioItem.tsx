import PortfolioItemInfo from "../interfaces/PortfolioItemInfo";
import kayak from "../../src/assets/kayak.jpg";

const PortfolioItem = ({
  portfolioItemInfo,
}: {
  portfolioItemInfo: PortfolioItemInfo;
}) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-200 ease-in-out pt-10 pb-10 pl-10 pr-10 m-10 h-[700px]">
        <div className="col-span-1">
          <div className="h-full grid grid-cols-1 items-center">
            <div>
              <h2 className="text-2xl mb-5">{portfolioItemInfo.title}</h2>
              {portfolioItemInfo.descriptionPoints.map(
                (point: string, index: number) => (
                  <p key={index} className="italic font-thin text-base mb-3">
                    {point}
                  </p>
                )
              )}
            </div>
            <div>
              <div className="grid grid-cols-4 gap-y-5">
                <label className="col-span-1 text-lg mr-3">Tech Stack:</label>
                <p className="col-span-3 text-lg font-thin">
                  {portfolioItemInfo.technologiesUsed.join(", ")}
                </p>
                {portfolioItemInfo.teamSize ? (
                  <>
                    <label className="col-span-1 text-lg mr-3">
                      Team Size:
                    </label>
                    <p className="col-span-3 text-lg font-thin">
                      {portfolioItemInfo.teamSize}
                    </p>
                  </>
                ) : (
                  <></>
                )}
                {portfolioItemInfo.myRole ? (
                  <>
                    <label className="col-span-1 text-lg mr-3">Role:</label>
                    <p className="col-span-3 text-lg font-thin">
                      {portfolioItemInfo.myRole}
                    </p>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="h-full cursor-grab">
            <img
              src={portfolioItemInfo.images[0] ?? kayak}
              className="w-full h-full object-contain"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;
