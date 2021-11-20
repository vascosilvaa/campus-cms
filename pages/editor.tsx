import React from "react";
import { Editor as CraftEditor, Frame, Element } from "@craftjs/core";
import Layout from "components/layout";
import { Viewport, RenderNode } from "components/editor";
import {
  Container,
  Heading1,
  Heading2,
  BodyText,
  Article,
  ArticleChildren,
  Card,
  Image,
  Video,
  Link,
  Button,
} from "components/selectors";

function Editor() {
  return (
    <CraftEditor
      resolver={{
        Container,
        Heading1,
        Heading2,
        BodyText,
        Article,
        ArticleChildren,
        Card,
        Image,
        Video,
        Link,
        Button,
      }}
      enabled={true}
      onRender={RenderNode}
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
          />
        </Frame>
      </Viewport>
    </CraftEditor>
  );
}
Editor.Layout = Layout;

export default Editor;
