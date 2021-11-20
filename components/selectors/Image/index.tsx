import { useNode } from "@craftjs/core";
import React from "react";
import { commonProps, CommonProps } from "../Common/common";
import CommonWrapper from "../Common/commonWrapper";
import settings from "./settings";

export type ImageProps = CommonProps & {
  src: string;
  width: number;
  alt: string;
};

const defaultProps: ImageProps = {
  src: "https://www.telerama.fr/sites/tr_master/files/styles/968x546/public/medias/2017/05/media_157885/pepe-the-frog-est-mort-mais-au-fait-c-etait-qui%2CM449035.jpg?itok=IyXTP0Rg",
  width: 100,
  alt: "I'm an image!",
  ...commonProps,
};

export const Image = (props: Partial<ImageProps> = defaultProps) => {
  const { src, width, alt, margin } = { ...defaultProps, ...props };
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return (
    <CommonWrapper width={width} margin={margin}>
      <img
        ref={connect}
        src={src}
        alt={alt}
        style={{
          height: "auto",
          width: "100%",
        }}
      />
    </CommonWrapper>
  );
};

Image.craft = {
  displayName: "Image",
  props: {
    ...defaultProps,
  },
  related: {
    toolbar: settings,
  },
};
