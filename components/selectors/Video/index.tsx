import { useNode, useEditor } from "@craftjs/core";
import React from "react";
import YouTube from "react-youtube";
import styled from "styled-components";
import { commonProps, CommonProps } from "../Common/common";
import CommonWrapper from "../Common/commonWrapper";

import settings from "./settings";

const YoutubeDiv = styled.div<any>`
  width: ${(props) => (props.width ? `${props.width}%` : "100%")};
  height: 100%;
  > div {
    height: 100%;
  }
  iframe {
    pointer-events: ${(props) => (props.enabled ? "none" : "auto")};
    // width:100%!important;
    // height:100%!important;
  }
`;

export type VideoProps = CommonProps & {
  videoId: string;
  width: number;
};

const defaultProps: VideoProps = {
  videoId: "3szyvXQkuzM",
  width: 100,
  ...commonProps,
};

export const Video = (props: Partial<VideoProps>) => {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { videoId, width, margin } = { ...defaultProps, ...props };

  return (
    <CommonWrapper margin={margin} width={width}>
      <YoutubeDiv ref={connect} enabled={enabled} width={width}>
        <YouTube
          videoId={videoId}
          opts={{
            width: `100%`,
          }}
        />
      </YoutubeDiv>
    </CommonWrapper>
  );
};

Video.craft = {
  displayName: "Video",
  props: {
    ...defaultProps,
  },
  related: {
    toolbar: settings,
  },
};
