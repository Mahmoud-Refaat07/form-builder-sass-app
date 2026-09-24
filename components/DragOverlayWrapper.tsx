import { DragOverlay, useDndMonitor } from "@dnd-kit/core";

export default function DragOverlayWrapper() {
  useDndMonitor({
    onDragStart: (event) => {
      console.log("DRAG ITEM", event);
    },
  });
  const node = (
    <div className="bg-red-500 text-white p-4 text-xl">No drag overlay</div>
  );
  return <DragOverlay>{node}</DragOverlay>;
}
