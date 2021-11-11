import React from "react";
import Router from "next/router";
import "../styles/app.css";

const Noop = ({ children }) => children;

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
