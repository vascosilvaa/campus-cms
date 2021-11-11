import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Navbar from "components/navbar";

const theme = createTheme({
  typography: {
    fontFamily: [
      "acumin-pro",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <main className="h-full h-screen">{children}</main>
    </ThemeProvider>
  );
}
