"use client";
import { cn } from "@/lib/utils";
import { Svg } from "Components/Svg";
import { ThemeSwitcher } from "Features/theme/ThemeSwitcher";
import React, { useState, useRef } from "react";
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const MenuBarContent: React.FC = () => {
  const dragRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);

  const [, drag] = useDrag({
    options: { dropEffect: "copy" },
    type: "MENU_BAR",
    item: { id: "menu-bar" }, // required in v14
    collect: (monitor) => {
      const dragging = monitor.isDragging();
      setIsDragging(dragging);
      return {};
    },
    end: (item, monitor) => {
      if (!dragRef.current) return;

      const offset = monitor.getClientOffset();
      if (!offset) return;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const elWidth = dragRef.current.offsetWidth;
      const elHeight = dragRef.current.offsetHeight;
      const snapMargin = 20;

      let newX = offset.x - elWidth / 2;
      let newY = offset.y - elHeight / 2;

      // Snap vertically
      const distancesY = [
        { name: "top", value: Math.abs(newY - snapMargin) },
        {
          name: "center",
          value: Math.abs(newY - viewportHeight / 2 + elHeight / 2),
        },
        {
          name: "bottom",
          value: Math.abs(newY - (viewportHeight - elHeight - snapMargin)),
        },
      ];
      const closestY = distancesY.reduce((prev, curr) =>
        curr.value < prev.value ? curr : prev
      ).name;
      if (closestY === "top") newY = snapMargin;
      else if (closestY === "center") newY = viewportHeight / 2 - elHeight / 2;
      else newY = viewportHeight - elHeight - snapMargin;

      // Snap horizontally
      const distancesX = [
        { name: "left", value: Math.abs(newX - snapMargin) },
        {
          name: "center",
          value: Math.abs(newX - (viewportWidth / 2 - elWidth / 2)),
        },
        {
          name: "right",
          value: Math.abs(newX - (viewportWidth - elWidth - snapMargin)),
        },
      ];
      const closestX = distancesX.reduce((prev, curr) =>
        curr.value < prev.value ? curr : prev
      ).name;
      if (closestX === "left") newX = snapMargin;
      else if (closestX === "center") newX = viewportWidth / 2 - elWidth / 2;
      else newX = viewportWidth - elWidth - snapMargin;

      setPosition({ x: newX, y: newY });
    },
  });

  drag(dragRef);

  return (
    <div
      ref={dragRef}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: isDragging ? "none" : "transform 0.25s ease",
        position: "fixed",
        zIndex: 9999,
      }}
      className="h-12 w-2xl  rounded-md border drop-shadow-lg shadow-foreground bg-accent flex items-center px-2 justify-center"
    >
      <ThemeSwitcher />
      <div
        className={cn(
          "text-secondary-foreground grid place-content-center size-10 ml-auto"
        )}
      >
        <Svg.DragFill className="rotate-90" />
      </div>
    </div>
  );
};

export default function MenuBar() {
  return (
    <DndProvider backend={HTML5Backend}>
      <MenuBarContent />
    </DndProvider>
  );
}
