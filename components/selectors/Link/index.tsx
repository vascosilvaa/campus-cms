import { useEditor, useNode } from "@craftjs/core";
import React from "react";
import { commonProps, CommonProps } from "../Common/common";
import CommonWrapper from "../Common/commonWrapper";
import settings from "./settings";

export type LinkProps = CommonProps & {
  children: string;
  href: string;
  target: "_blank" | "_self" | "_parent" | "_top" | "framename";
};

const defaultProps: LinkProps = {
  children: "Custom link",
  href: "https://www.google.com",
  target: "_blank",
  ...commonProps,
};

export const Link = (props: Partial<LinkProps> = defaultProps) => {
  const {
    connectors: { connect },
  } = useNode();

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const Tag = enabled ? "p" : "a";
  const { margin, width, ...rest } = { ...defaultProps, ...props };
  return (
    <CommonWrapper width={width} margin={margin}>
      <Tag
        ref={connect}
        {...rest}
        className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600;"
      />
    </CommonWrapper>
  );
};

Link.craft = {
  displayName: "Link",
  props: {
    ...defaultProps,
  },
  related: {
    toolbar: settings,
  },
};
