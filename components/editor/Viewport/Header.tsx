import { useEditor } from "@craftjs/core";
import { Tooltip, Snackbar, Button } from "@material-ui/core";
import Link from "next/link";
import lz from "lzutf8";
import copy from "copy-to-clipboard";
import cx from "classnames";
import React, { useState } from "react";
import styled from "styled-components";

import Checkmark from "../../../public/icons/check.svg";
import Customize from "../../../public/icons/customize.svg";
import RedoSvg from "../../../public/icons/toolbox/redo.svg";
import UndoSvg from "../../../public/icons/toolbox/undo.svg";

const HeaderDiv = styled.div`
  width: 100%;
  height: 45px;
  z-index: 99999;
  position: relative;
  padding: 0px 10px;
  background: #d4d4d4;
  display: flex;
`;

const Btn = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border-radius: 3px;
  color: #fff;
  font-size: 13px;
  svg {
    margin-right: 6px;
    width: 12px;
    height: 12px;
    fill: #fff;
    opacity: 0.9;
  }
`;

const Item = styled.a<{ disabled?: boolean }>`
  margin-right: 10px;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    fill: #707070;
  }
  ${(props) =>
    props.disabled &&
    `
    opacity:0.5;
    cursor: not-allowed;
  `}
`;

export const Header = () => {
  const { enabled, canUndo, canRedo, actions, query } = useEditor(
    (state, query) => ({
      enabled: state.options.enabled,
      canUndo: query.history.canUndo(),
      canRedo: query.history.canRedo(),
    })
  );
  const [snackbarMessage, setSnackbarMessage] = useState<string>();
  const [compressedPage, setCompressedPage] = useState<string>();

  const snackBarAction = (
    <Link href={`/loader?page=${compressedPage}`}>
      <Button color="secondary" size="small">
        Preview on loader page
      </Button>
    </Link>
  );
  return (
    <>
      <HeaderDiv className="w-full text-white transition header">
        <div className="flex items-center justify-end w-full px-4">
          {enabled && (
            <div className="flex flex-1">
              <Tooltip title="Undo" placement="bottom">
                <Item
                  disabled={!canUndo}
                  onClick={() => actions.history.undo()}
                >
                  <UndoSvg />
                </Item>
              </Tooltip>
              <Tooltip title="Redo" placement="bottom">
                <Item
                  disabled={!canRedo}
                  onClick={() => actions.history.redo()}
                >
                  <RedoSvg />
                </Item>
              </Tooltip>
            </div>
          )}
          <div className="flex">
            <Btn
              className={cx([
                "transition cursor-pointer",
                {
                  "bg-green-400": enabled,
                  "bg-primary": !enabled,
                },
              ])}
              onClick={() => {
                actions.setOptions((options) => (options.enabled = !enabled));
              }}
            >
              {enabled ? <Checkmark /> : <Customize />}
              {enabled ? "Finish Editing" : "Edit"}
            </Btn>
            {!enabled && (
              <Btn
                className={cx(["ml-2 transition cursor-pointer bg-green-400"])}
                onClick={() => {
                  const json = query.serialize();
                  const compressedJSON: string = lz.encodeBase64(
                    lz.compress(json)
                  );
                  copy(compressedJSON);
                  setCompressedPage(compressedJSON);
                  setSnackbarMessage("State copied to clipboard");
                }}
              >
                Export page (copy to clipboard)
              </Btn>
            )}
          </div>
        </div>
      </HeaderDiv>
      <Snackbar
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={!!snackbarMessage}
        onClose={() => setSnackbarMessage(null)}
        message={<span>{snackbarMessage}</span>}
        action={snackBarAction}
      />
    </>
  );
};
