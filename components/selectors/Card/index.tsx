import React from "react";
import { useNode, useEditor } from "@craftjs/core";
import settings from "./settings";
import { commonProps, CommonProps } from "../Common/common";
import CommonWrapper from "../Common/commonWrapper";
import ContentEditable from "react-contenteditable";

export type CardProps = CommonProps & {
  title: string;
  subtitle: string;
  body: string;
  button: {
    href: string;
    text: string;
  };
};

const defaultProps: CardProps = {
  title: "card title",
  subtitle: "card subtitle",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin tempus interdum. Aliquam ornare ac sem aliquam scelerisque. Orci varius natoque penatibus et magnis dis parturient montes.",
  button: {
    href: "https://www.google.pt",
    text: "click me",
  },
  ...commonProps,
};

export const Card = (props: Partial<CardProps>) => {
  const { margin, width, title, body, subtitle, button } = {
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
      <div
        style={{
          height: "100%",
          backgroundColor: "white",
          borderRadius: 3,
          padding: 20,
          borderColor: "grey",
          borderWidth: 2,
        }}
      >
        <ContentEditable
          innerRef={connect}
          html={title}
          disabled={!enabled}
          onChange={(e) => {
            setProp((prop) => (prop.title = e.target.value), 500);
          }}
          tagName="h1"
        />
        <ContentEditable
          innerRef={connect}
          html={subtitle}
          disabled={!enabled}
          onChange={(e) => {
            setProp((prop) => (prop.subtitle = e.target.value), 500);
          }}
          tagName="h2"
        />

        <ContentEditable
          innerRef={connect}
          html={body}
          disabled={!enabled}
          onChange={(e) => {
            setProp((prop) => (prop.body = e.target.value), 500);
          }}
          tagName="p"
        />

        <button
          className="btn btn-primary btn-medium"
          onClick={() =>
            enabled ? undefined : window.open(button.href, "_blank")
          }
        >
          {button.text}
        </button>
      </div>
    </CommonWrapper>
  );
};

Card.craft = {
  displayName: "Card",
  props: defaultProps,
  rules: {},
  related: {
    toolbar: settings,
  },
};
