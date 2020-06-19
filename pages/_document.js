import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";

import { theme } from "_helpers";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />

          {/* <!-- The following libraries and polyfills are recommended to maximize browser support --> */}
          {/* <!-- NOTE: you must adjust the paths as appropriate for your project --> */}

          {/* <!-- REQUIRED: Web Components polyfill to support Edge and Firefox < 63 --> */}
          <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.1.3/webcomponents-loader.js" />

          {/* <!-- OPTIONAL: Intersection Observer polyfill for better performance in Safari and IE11 --> */}
          <script src="https://unpkg.com/intersection-observer@0.5.1/intersection-observer.js" />

          {/* <!-- OPTIONAL: Resize Observer polyfill improves resize behavior in non-Chrome browsers --> */}
          <script src="https://unpkg.com/resize-observer-polyfill@1.5.1/dist/ResizeObserver.js" />
        </Head>
        <body>
          <Main />
          <div id="app-portal-1" />
          <div id="app-portal-2" />
          <div id="app-portal-3" />
          <NextScript />

          {/* <!-- Loads <model-viewer> for modern browsers: --> */}
          <script
            type="module"
            src="https://unpkg.com/@google/model-viewer/dist/model-viewer.js"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
