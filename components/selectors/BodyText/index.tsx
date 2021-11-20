import React from "react";
import { useNode, useEditor } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import settings from "./settings";
import { commonProps, CommonProps } from "../Common/common";
import CommonWrapper from "../Common/commonWrapper";

export type BodyTextProps = CommonProps & {
  textAlign: string;
  fontWeight: string;
  color: Record<"r" | "g" | "b" | "a", string>;
  text: string;
};

const defaultProps: BodyTextProps = {
  textAlign: "left",
  fontWeight: "500",
  color: { r: "92", g: "90", b: "90", a: "1" },
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin tempus interdum. Aliquam ornare ac sem aliquam scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum consequat, mauris eget vestibulum faucibus, nunc elit sagittis purus, accumsan scelerisque turpis nisl sed erat. Cras iaculis accumsan venenatis. Integer ac ultricies lorem. Maecenas aliquam purus vitae nulla porttitor, quis pulvinar erat interdum. Etiam vel tristique leo, nec pretium tellus. Nam in pharetra turpis, eget volutpat tortor. Morbi bibendum sem vel diam dignissim, ac congue lacus luctus. Integer et commodo lacus, eu rhoncus eros. In cursus leo nisi. Suspendisse porttitor volutpat leo, non finibus mi sodales at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  ...commonProps,
};

export const BodyText = (props: Partial<BodyTextProps> = defaultProps) => {
  const { textAlign, fontWeight, color, margin, text, width } = {
    ...defaultProps,
    ...props,
  };
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
        tagName="p"
        style={{
          color: `rgba(${Object.values(color)})`,
          fontWeight,
          textAlign,
        }}
      />
    </CommonWrapper>
  );
};

BodyText.craft = {
  displayName: "Body text",
  props: defaultProps,
  related: {
    toolbar: settings,
  },
};
