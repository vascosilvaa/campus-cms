import React from "react";
import { ToolbarSection, ToolbarItem } from "../../editor";
import CommonSettings from "../Common/commonSettings";

export default () => (
  <React.Fragment>
    <CommonSettings />
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
      <ToolbarItem full={true} propKey="color" type="color" label="Text" />
    </ToolbarSection>
  </React.Fragment>
);
