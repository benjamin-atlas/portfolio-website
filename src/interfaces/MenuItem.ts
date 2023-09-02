import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface MenuItem {
  label: string;
  icon: IconDefinition;
  onClick: () => void;
}

export default MenuItem;
