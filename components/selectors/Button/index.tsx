import { useEditor, useNode } from "@craftjs/core";
import React from "react";
import ContentEditable from "react-contenteditable";
import { commonProps, CommonProps } from "../Common/common";
import CommonWrapper from "../Common/commonWrapper";
import settings from "./settings";

type ButtonProps = CommonProps & {
  children: string;
  href: string;
  width: number;
  type: "primary" | "secondary" | "tertiary";
  size: "small" | "medium" | "large";
};

const defaultProps: ButtonProps = {
  children: "Custom button",
  href: "https://www.google.pt",
  width: 100,
  type: "primary",
  size: "medium",
  ...commonProps,
};

export const Button = (props: Partial<ButtonProps> = defaultProps) => {
  const {
    connectors: { connect },
    setProp,
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const { children, href, width, type, size, margin } = {
    ...defaultProps,
    ...props,
  };

  return (
    <CommonWrapper width={width} margin={margin}>
      <button
        ref={connect}
        onClick={() => (enabled ? undefined : window.open(href, "_blank"))}
        className={`btn btn-${size} btn-${type}`}
        style={{
          width: `${width}%`,
          margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        }}
      >
        <ContentEditable
          html={children}
          disabled={!enabled}
          onChange={(e) => {
            setProp((prop) => (prop.children = e.target.value), 500);
          }}
          tagName="span"
        />
      </button>
    </CommonWrapper>
  );
};

Button.craft = {
  displayName: "Button",
  props: {
    ...defaultProps,
  },
  related: {
    toolbar: settings,
  },
};
