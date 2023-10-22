import PortfolioImage from "./PortfolioImage";

interface PortfolioItemInfo {
  title: string;
  descriptionPoints: string[];
  images: PortfolioImage[];
  technologiesUsed: string[];
  teamSize?: string;
  myRole?: string;
  link?: string;
}

export default PortfolioItemInfo;
