import React from "react";
import { ToolbarSection, ToolbarItem } from "../../editor";
import CommonSettings from "../Common/commonSettings";

export default () => {
  return (
    <>
      <CommonSettings />
      <ToolbarSection
        title="Dimensions"
        props={["width"]}
        summary={({ width }: any) => {
          return `${width || 0}% x auto`;
        }}
      >
        <ToolbarItem full={true} propKey="width" type="slider" label="Width" />
      </ToolbarSection>
      <ToolbarSection title="Youtube">
        <ToolbarItem
          full={true}
          propKey="videoId"
          type="text"
          label="Video ID"
        />
      </ToolbarSection>
    </>
  );
};
