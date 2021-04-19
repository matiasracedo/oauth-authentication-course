import React from "react";
import App from "next/app";

import HtmlHead from "../layout/HtmlHead";
import AppLayout from "../layout/AppLayout";

class CustomApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <HtmlHead />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </>
    );
  }
}

export default CustomApp;
