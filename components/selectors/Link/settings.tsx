import React from "react";

import { ToolbarSection, ToolbarItem } from "../../editor";
import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio";
import CommonSettings from "../Common/commonSettings";

export default () => (
  <>
    <CommonSettings />
    <ToolbarSection title="Link" props={["href"]} summary={({ href }) => href}>
      <ToolbarItem propKey="children" type="text" label="Text" />
      <ToolbarItem full={true} propKey="href" type="text" label="Link" />
      <ToolbarItem propKey="target" type="radio" label="New tab?">
        <ToolbarRadio value="_blank" label="yes" />
        <ToolbarRadio value="_self" label="no" />
      </ToolbarItem>
    </ToolbarSection>
  </>
);
