import { Element, useEditor } from "@craftjs/core";
import { Tooltip } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import {
  Container,
  Heading1,
  Heading2,
  BodyText,
  Article,
  Image,
  Video,
  Link,
  Button,
  Card,
} from "components/selectors";

const ToolboxDiv = styled.div<{ enabled: boolean }>`
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  ${(props) => (!props.enabled ? `width: 0;` : "")}
  ${(props) => (!props.enabled ? `opacity: 0;` : "")}
`;

const Item = styled.a<{ move?: boolean }>`
  svg {
    width: 22px;
    height: 22px;
    fill: #707070;
  }
  ${(props) =>
    props.move &&
    `
    cursor: move;
  `}
`;

export const Toolbox = () => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <ToolboxDiv
      enabled={enabled && enabled}
      className="flex flex-col h-full pl-6 pr-6 transition bg-white toolbox"
    >
      <div className="flex flex-col flex-1 pt-3 text-sm text-gray-800">
        <div
          className=""
          ref={(ref) =>
            create(
              ref,
              <Element
                canvas
                is={Container}
                background={{ r: 240, g: 240, b: 240, a: 1 }}
                color={{ r: 78, g: 78, b: 78, a: 1 }}
                height="300px"
                width="300px"
              />
            )
          }
        >
          <Tooltip title="Container" placement="right">
            <Item className="block pb-2 m-2 cursor-pointer " move>
              Container
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Heading1 />)}>
          <Tooltip title="Heading 1" placement="right">
            <Item className="block pb-2 m-2 cursor-pointer" move>
              Title
            </Item>
          </Tooltip>
        </div>

        <div ref={(ref) => create(ref, <Heading2 />)}>
          <Tooltip title="Heading 2" placement="right">
            <Item className="block pb-2 m-2 cursor-pointer" move>
              Subtitle
            </Item>
          </Tooltip>
        </div>

        <div ref={(ref) => create(ref, <BodyText />)}>
          <Tooltip title="Body text" placement="right">
            <Item className="block pb-2 m-2 cursor-pointer" move>
              Body text
            </Item>
          </Tooltip>
        </div>

        <div ref={(ref) => create(ref, <Article />)}>
          <Tooltip title="Article" placement="right">
            <Item className="block pb-2 m-2 cursor-pointer" move>
              Article
            </Item>
          </Tooltip>
        </div>

        <div ref={(ref) => create(ref, <Image />)}>
          <Tooltip title="Image" placement="right">
            <Item className="block pb-2 m-2 cursor-pointer" move>
              Image
            </Item>
          </Tooltip>
        </div>

        <div ref={(ref) => create(ref, <Video />)}>
          <Tooltip title="Video" placement="right">
            <Item className="block pb-2 m-2 cursor-pointer" move>
              Video
            </Item>
          </Tooltip>
        </div>

        <div ref={(ref) => create(ref, <Link />)}>
          <Tooltip title="Link" placement="right">
            <Item className="block pb-2 m-2 cursor-pointer" move>
              Link
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Button />)}>
          <Tooltip title="Button" placement="right">
            <Item className="block pb-2 m-2 cursor-pointer" move>
              Button
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Card />)}>
          <Tooltip title="Card" placement="right">
            <Item className="block pb-2 m-2 cursor-pointer" move>
              Card
            </Item>
          </Tooltip>
        </div>
      </div>
    </ToolboxDiv>
  );
};
