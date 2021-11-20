import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Grid,
  Button as MaterialButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
} from "@material-ui/core";
import { Editor, Element, Frame, useEditor } from "@craftjs/core";
import lz from "lzutf8";
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
} from "../components/selectors";
import Layout from "components/layout";

const LoaderTopbar = ({ loadPage }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [stateToLoad, setStateToLoad] = useState(null);

  return (
    <Box mb={1}>
      <Grid container alignItems="center">
        <Grid item>
          <MaterialButton
            className="load-state-btn"
            size="small"
            variant="outlined"
            onClick={() => setDialogOpen(true)}
          >
            Load exported page
          </MaterialButton>
          <Dialog
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            fullWidth
            maxWidth="md"
          >
            <DialogTitle id="alert-dialog-title">
              Load exported page
            </DialogTitle>
            <DialogContent>
              <TextField
                multiline
                fullWidth
                placeholder='Paste the contents that were copied from the "Export page" button'
                size="small"
                value={stateToLoad}
                onChange={(e) => setStateToLoad(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <MaterialButton
                onClick={() => setDialogOpen(false)}
                color="primary"
              >
                Cancel
              </MaterialButton>
              <MaterialButton
                onClick={() => {
                  setDialogOpen(false);
                  loadPage(stateToLoad);
                  setSnackbarMessage("State loaded");
                }}
                color="primary"
                autoFocus
              >
                Load
              </MaterialButton>
            </DialogActions>
          </Dialog>
          <Snackbar
            autoHideDuration={1000}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={!!snackbarMessage}
            onClose={() => setSnackbarMessage(null)}
            message={<span>{snackbarMessage}</span>}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

const LoaderContent = ({ compressedJson }) => {
  const { actions } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const json = useMemo(() => {
    if (compressedJson) {
      const pageJson = lz.decompress(lz.decodeBase64(compressedJson));
      actions.deserialize(pageJson);
      return pageJson;
    }
    return undefined;
  }, [compressedJson]);

  if (!json) return <></>;

  return (
    <Frame json={json}>
      <Element
        canvas
        is={Container}
        width="800px"
        height="auto"
        background={{ r: 255, g: 255, b: 255, a: 1 }}
        padding={["40", "40", "40", "40"]}
        custom={{ displayName: "Your page" }}
      />
    </Frame>
  );
};

const Loader = () => {
  const { query } = useRouter();
  const [compressedJson, setCompressedJson] = useState<string>();

  useEffect(() => {
    setCompressedJson(query.page as string);
  }, [query.page]);

  return (
    <Box px={1} py={1} mt={2} mb={1}>
      <Editor
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
        enabled={false}
      >
        <LoaderTopbar loadPage={setCompressedJson} />
        {compressedJson && <LoaderContent compressedJson={compressedJson} />}
      </Editor>
    </Box>
  );
};

Loader.Layout = Layout;

export default Loader;
