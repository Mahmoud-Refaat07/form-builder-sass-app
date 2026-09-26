/* eslint-disable react-hooks/refs */
import React from "react";
import { FormElement } from "../FormElements";
import { Button } from "../ui/button";
import { useDraggable } from "@dnd-kit/core";

export default function SidebarButtonElement({
  formElement,
}: {
  formElement: FormElement;
}) {
  const { label, icon: Icon } = formElement.designerButtonElement;

  const draggable = useDraggable({
    id: `designer-btn-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerButtonElement: true,
    },
  });

  return (
    <Button
      ref={draggable.setNodeRef}
      className={`flex flex-col gap-2 h-30 w-30 cursor-grab ${draggable.isDragging && "ring-2 ring-primary"}`}
      variant={"outline"}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <Icon className="w-8 h-8  curosr-grab text-white" />
      <p className="text-xs">{label}</p>
    </Button>
  );
}

export function SidebarButtonElementDragOverlay({
  formElement,
}: {
  formElement: FormElement;
}) {
  const { label, icon: Icon } = formElement.designerButtonElement;
  const draggable = useDraggable({
    id: `designer-btn-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerButtonElement: true,
    },
  });

  return (
    <Button
      className={`flex flex-col gap-2 h-30 w-30 cursor-grab`}
      variant={"outline"}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <Icon className="w-8 h-8 text-secondary curosr-grab" />
      <p className="text-xs">{label}</p>
    </Button>
  );
}
