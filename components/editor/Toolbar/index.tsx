import { useEditor } from "@craftjs/core";
import React from "react";

export * from "./ToolbarItem";
export * from "./ToolbarSection";
export * from "./ToolbarTextInput";
export * from "./ToolbarDropdown";

export const Toolbar = () => {
  const { active, related, query } = useEditor((state) => ({
    active: state.events.selected,
    related:
      state.events.selected && state.nodes[state.events.selected].related,
  }));

  return (
    <div className="h-full py-2">
      {active && related.toolbar && React.createElement(related.toolbar)}
      {!active && (
        <div className="flex flex-col items-center justify-center h-full px-5 py-2 text-xs text-center">
          <p className="pb-1">Click on a component to start editing.</p>
          <p>
            You could also double click on the layers below to edit their names,
            like in Photoshop
          </p>
        </div>
      )}
    </div>
  );
};
