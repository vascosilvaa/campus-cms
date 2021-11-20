import { ToolbarItem, ToolbarSection } from "components/editor";
import React from "react";
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
      <ToolbarSection title="Settings" props={["src, alt"]} summary={() => "T"}>
        <ToolbarItem full={true} propKey="src" type="text" label="Source" />
        <ToolbarItem full={true} propKey="alt" type="text" label="Alt" />
      </ToolbarSection>
    </>
  );
};
