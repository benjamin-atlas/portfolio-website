import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface MenuItem {
  label: string;
  icon: IconDefinition;
  active: boolean;
  onClick: () => void;
}

export default MenuItem;
