import { useEditor, useNode } from "@craftjs/core";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { EditorProps } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { commonProps, CommonProps } from "../Common/common";
import CommonWrapper from "../Common/commonWrapper";
import settings from "./settings";

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export type TextEditorProps = CommonProps & {
  content?: any;
};

const defaultProps: TextEditorProps = {
  ...commonProps,
  content: null,
};

export const TextEditor = (props: Partial<TextEditorProps> = defaultProps) => {
  const {
    connectors: { connect },
    actions: { setProp },
  } = useNode();

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const { margin, width, ...rest } = { ...defaultProps, ...props };

  const handleEditorState = (editorState) => {
    setEditorState(editorState);
    setProp(
      (props) =>
        (props.content = draftToHtml(
          convertToRaw(editorState.getCurrentContent())
        ))
    );
  };

  return (
    <CommonWrapper width={width} margin={margin}>
      {enabled ? (
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={handleEditorState}
        />
      ) : (
        <div
          ref={connect}
          dangerouslySetInnerHTML={{
            __html: props.content,
          }}
        ></div>
      )}
    </CommonWrapper>
  );
};

TextEditor.craft = {
  displayName: "TextEditor",
  props: {
    ...defaultProps,
  },
  related: {
    toolbar: settings,
  },
};
