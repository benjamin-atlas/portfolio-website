import PortfolioItemInfo from "../interfaces/PortfolioItemInfo";

const PortfolioItem = ({
  portfolioItemInfo,
}: {
  portfolioItemInfo: PortfolioItemInfo;
}) => {
  return (
    <>
      <div className="relative w-full h-full flex items-center justify-center">
        <picture className="w-full h-full">
          <source
            media="(min-width: 850px)"
            srcSet={portfolioItemInfo.images[0].fullQualityPath}
          />
          <img
            className="w-full md:h-full absolute top-0 left-0 md:relative object-contain"
            src={portfolioItemInfo.images[0].mobileQualityPath}
          />
        </picture>

        <div className="info-panel absolute bottom-0 md:bottom-[10%] text-white p-8 w-[98%] flex justify-center">
          <div className="h-full grid grid-cols-1 items-center max-w-[1500px]">
            <div>
              <h2 className="text-2xl mb-5">{portfolioItemInfo.title}</h2>
              {portfolioItemInfo.descriptionPoints.map(
                (point: string, index: number) => (
                  <p
                    key={index}
                    className="italic font-thin text-sm md:text-base mb-3"
                  >
                    {point}
                  </p>
                )
              )}
            </div>
            <div>
              <div className="grid grid-cols-4 gap-y-5">
                <label className="col-span-1 text-sm md:text-lg mr-3">
                  Tech Stack:
                </label>
                <p className="col-span-3 text-sm md:text-lg font-thin">
                  {portfolioItemInfo.technologiesUsed.join(", ")}
                </p>
                {portfolioItemInfo.teamSize ? (
                  <>
                    <label className="col-span-1 text-sm md:text-lg mr-3">
                      Team Size:
                    </label>
                    <p className="col-span-3 text-sm md:text-lg font-thin">
                      {portfolioItemInfo.teamSize}
                    </p>
                  </>
                ) : (
                  <></>
                )}
                {portfolioItemInfo.myRole ? (
                  <>
                    <label className="col-span-1 text-sm md:text-lg mr-3">
                      Role:
                    </label>
                    <p className="col-span-3 text-sm md:text-lg font-thin">
                      {portfolioItemInfo.myRole}
                    </p>
                  </>
                ) : (
                  <></>
                )}
                {portfolioItemInfo.link ? (
                  <>
                    <label className="col-span-1 text-sm md:text-lg mr-3">
                      Link:
                    </label>
                    <a href={portfolioItemInfo.link} className="col-span-3 text-sm md:text-lg font-thin">
                      {portfolioItemInfo.link}
                    </a>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;
