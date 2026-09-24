import { useDroppable } from "@dnd-kit/core";
import { FormElements } from "../FormElements";
import SidebarButtonElement from "./SidebarButtonElement";

function DesignerSidebar() {
  const droppable = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerDropArea: true,
    },
  });

  return (
    <aside className="w-200 max-w-100 flex flex-col grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto">
      <div>elements</div>

      {Object.values(FormElements).map((formElement) => (
        <SidebarButtonElement
          key={formElement.type}
          formElement={formElement}
        />
      ))}
    </aside>
  );
}

export default DesignerSidebar;
