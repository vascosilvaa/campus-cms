import React from "react";
import { Editor as CraftEditor, Frame, Element } from "@craftjs/core";
import Layout from "components/layout";
import { Viewport } from "components/editor";
import { Container, Text } from "components/selectors";
import { Button } from "components/selectors/Button";
import { Custom1, OnlyButtons } from "components/selectors/Custom1";
import { Custom2, Custom2VideoDrop } from "components/selectors/Custom2";
import { Custom3, Custom3BtnDrop } from "components/selectors/Custom3";
import { Video } from "components/selectors/Video";

function Editor() {
  return (
    <CraftEditor
      resolver={{
        Container,
        Text,
        Custom1,
        Custom2,
        Custom2VideoDrop,
        Custom3,
        Custom3BtnDrop,
        OnlyButtons,
        Button,
        Video,
      }}
      enabled={true}
    >
      <Viewport>
        <Frame>
          <Element
            canvas
            is={Container}
            width="800px"
            height="auto"
            background={{ r: 255, g: 255, b: 255, a: 1 }}
            padding={["40", "40", "40", "40"]}
            custom={{ displayName: "App" }}
          ></Element>
        </Frame>
      </Viewport>
    </CraftEditor>
  );
}
Editor.Layout = Layout;

export default Editor;
