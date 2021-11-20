import { useNode, useEditor } from "@craftjs/core";
import React from "react";
import ContentEditable from "react-contenteditable";
import { commonProps, CommonProps } from "../Common/common";
import CommonWrapper from "../Common/commonWrapper";
import settings from "./settings";

export type Heading2Props = CommonProps & {
  color: Record<"r" | "g" | "b" | "a", string>;
  text: string;
};

const defaultProps: Heading2Props = {
  color: { r: "92", g: "90", b: "90", a: "1" },
  text: "Heading 2",
  ...commonProps,
};

export const Heading2 = (props: Partial<Heading2Props> = defaultProps) => {
  const { color, text, margin, width } = { ...defaultProps, ...props };
  const {
    connectors: { connect },
    setProp,
  } = useNode();
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  return (
    <CommonWrapper width={width} margin={margin}>
      <ContentEditable
        innerRef={connect}
        html={text}
        disabled={!enabled}
        onChange={(e) => {
          setProp((prop) => (prop.text = e.target.value), 500);
        }}
        tagName="h2"
        style={{
          width: "100%",
          color: `rgba(${Object.values(color)})`,
        }}
      />
    </CommonWrapper>
  );
};

Heading2.craft = {
  displayName: "Heading 2",
  props: {
    ...defaultProps,
  },
  related: {
    toolbar: settings,
  },
};
