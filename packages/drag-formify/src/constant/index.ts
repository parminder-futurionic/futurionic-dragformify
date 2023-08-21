import { inputItem } from "./inputProperty";
import { headingItem } from "./headingProperty";
import { component } from "./enum";


export const draggableListItem = [
  {
    id: 1,
    accordionHeading: "Heading Component",
    content: headingItem,
    component: component.HEADING_COMPONENT,
  },
  {
    id: 2,
    accordionHeading: "Input Component",
    content: inputItem,
    component: component.INPUT_COMPONENT,
  },
];
