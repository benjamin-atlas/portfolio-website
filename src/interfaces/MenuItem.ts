import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface MenuItem {
  label: string;
  icon: IconDefinition;
  active: boolean;
  id: string;
  onClick: () => void;
}

export default MenuItem;
