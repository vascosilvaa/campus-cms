import React from "react";
import { capitalize, weightDescription } from "../../../utils/text";
import { ToolbarSection, ToolbarItem } from "../../editor";
import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio";
import CommonSettings from "../Common/commonSettings";

export default () => (
  <>
    <CommonSettings />
    <ToolbarSection
      title="Typography"
      props={["fontSize", "fontWeight", "textAlign"]}
      summary={({ fontWeight, textAlign }: any) => {
        return `${weightDescription(fontWeight)}, ${capitalize(textAlign)}`;
      }}
    >
      <ToolbarItem propKey="textAlign" type="radio" label="Align">
        <ToolbarRadio value="left" label="Left" />
        <ToolbarRadio value="center" label="Center" />
        <ToolbarRadio value="right" label="Right" />
      </ToolbarItem>
      <ToolbarItem propKey="fontWeight" type="radio" label="Weight">
        <ToolbarRadio value="400" label="Regular" />
        <ToolbarRadio value="500" label="Medium" />
        <ToolbarRadio value="700" label="Bold" />
      </ToolbarItem>
    </ToolbarSection>
    <ToolbarSection
      title="Appearance"
      props={["color"]}
      summary={({ color }: any) => {
        return (
          <div className="fletext-right">
            <p
              style={{
                color: color && `rgba(${Object.values(color)})`,
              }}
              className="text-right text-white"
            >
              T
            </p>
          </div>
        );
      }}
    >
      <ToolbarItem
        full={true}
        propKey="color"
        type="color"
        label="Text color"
      />
    </ToolbarSection>
  </>
);
