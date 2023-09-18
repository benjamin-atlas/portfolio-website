import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface StatCardInfo {
  icon: IconDefinition;
  currentValue: number;
  startValue: number;
  description: string;
}

export default StatCardInfo;
