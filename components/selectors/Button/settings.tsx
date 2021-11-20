import React from "react";
import { ToolbarSection, ToolbarItem } from "../../editor";
import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio";
import CommonSettings from "../Common/commonSettings";

export default () => {
  return (
    <>
      <CommonSettings />
      <ToolbarSection
        title="Content"
        props={["children", "href"]}
        summary={() => "T"}
      >
        <ToolbarItem full={true} propKey="children" type="text" label="Text" />
        <ToolbarItem full={true} propKey="href" type="text" label="Link" />
      </ToolbarSection>

      <ToolbarSection
        title="Appearance"
        props={["type", "size"]}
        summary={() => "T"}
      >
        <ToolbarItem propKey="type" type="radio" label="Button type">
          <ToolbarRadio value="primary" label="Primary" />
          <ToolbarRadio value="secondary" label="Secondary" />
          <ToolbarRadio value="tertiary" label="Tertiary" />
        </ToolbarItem>

        <ToolbarItem propKey="size" type="radio" label="Button size">
          <ToolbarRadio value="small" label="Small" />
          <ToolbarRadio value="medium" label="Medium" />
          <ToolbarRadio value="large" label="Large" />
        </ToolbarItem>

        <ToolbarItem full={true} propKey="width" type="slider" label="Width" />
      </ToolbarSection>
    </>
  );
};
