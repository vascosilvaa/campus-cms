import { AppBar, Typography, Button, Toolbar } from "@material-ui/core";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Link href="/">
          <Typography variant="h6" component="div">
            Collab CMS
          </Typography>
        </Link>

        <Link href="/editor">
          <Button color="inherit">Editor</Button>
        </Link>
        <Link href="/loader">
          <Button color="inherit">Loader</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
