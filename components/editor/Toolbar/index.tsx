import { useEditor } from "@craftjs/core";
import React from "react";
import { Button as MaterialButton, Snackbar } from "@material-ui/core";

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
    <div className="h-full py-1">
      {active && related.toolbar && React.createElement(related.toolbar)}
      {!active && (
        <div
          className="flex flex-col items-center justify-center h-full px-5 py-2 text-center"
          style={{
            color: "rgba(0, 0, 0, 0.5607843137254902)",
            fontSize: "11px",
          }}
        >
          <h2 className="pb-1">Click on a component to start editing.</h2>
          <h2>
            You could also double click on the layers below to edit their names,
            like in Photoshop
          </h2>
        </div>
      )}
    </div>
  );
};
