import React from "react";
import Layout from "components/layout";
import {
  Box,
  Typography,
  Link as MaterialLink,
  Button,
} from "@material-ui/core";
import Link from "next/link";

function App() {
  return (
    <Box px={3} py={5} bgcolor="#fff" height="100%">
      <Typography variant="h4" component="h2">
        Hello. This is a POC for Collab CMS editor.
      </Typography>
      <Box py={2}>
        <Typography>
          Check documentation at{" "}
          <MaterialLink
            href="https://github.com/vascosilvaa/campus-cms"
            target="_blank"
          >
            README file
          </MaterialLink>
          .
        </Typography>
      </Box>

      <Box py={2}>
        <Link href="editor">
          <Button variant="outlined">Go to editor page</Button>
        </Link>
      </Box>
      <Link href="loader">
        <Button variant="outlined">Go to preview page</Button>
      </Link>
    </Box>
  );
}
App.Layout = Layout;

export default App;
