import React from "react";
import { useNode, useEditor, Element } from "@craftjs/core";
import settings from "./settings";
import { BodyText, Heading1, Heading2 } from "..";
import { commonProps, CommonProps } from "../Common/common";
import CommonWrapper from "../Common/commonWrapper";

export type ArticleProps = CommonProps & {};

const defaultProps = {
  ...commonProps,
};

export const ArticleChildren = ({
  children,
  width = 100,
  margin = ["0", "0", "0", "0"] as CommonProps["margin"],
  ...props
}) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <CommonWrapper width={width} margin={margin}>
      <div title="article" ref={connect} {...props}>
        {children}
      </div>
    </CommonWrapper>
  );
};

ArticleChildren.craft = {
  props: defaultProps,
  rules: {
    // canMoveIn: false,
  },
  related: {
    toolbar: settings,
  },
};

export const Article = ({ margin, width }: Partial<ArticleProps>) => {
  return (
    <Element
      canvas
      id="article"
      is={ArticleChildren}
      width={width}
      margin={margin}
    >
      <Heading1 />
      <Heading2 />
      <BodyText />
    </Element>
  );
};

Article.craft = {
  displayName: "Article",
  props: defaultProps,
  rules: {},
};
