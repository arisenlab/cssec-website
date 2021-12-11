import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import dynamic from "next/dynamic";
import Router, { useRouter } from "next/router";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "components/theme";

import NProgress from "nprogress";
import { SnackbarProvider } from "notistack";

import "react-image-gallery/styles/css/image-gallery.css";

const Header = dynamic(() => import("components/general/header"));
const Footer = dynamic(() => import("components/general/footer"));
import Space from "components/general/space";

import { frontend_url } from "utils/constants";
import * as gtag from "utils/gtag";

import routes from "navigation/routes";

NProgress.configure({
  showSpinner: false,
});

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = (url) => {
  NProgress.done();
  //gtag.pageview(url);
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

export default function CSSECFrontEnd(props) {
  const { Component, pageProps } = props;
  const router = useRouter();

  const findRouteObject = () => {
    let submenuObject = null;
    let menuObject = routes.find((route) => {
      if ("submenu" in route) {
        submenuObject = route.submenu.find(
          (sub) => sub.href === router.pathname
        );
        return submenuObject;
      } else {
        return route.href === router.pathname;
      }
    });

    return submenuObject ? submenuObject : menuObject;
  };

  const routeObject = findRouteObject();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    router.events.on("routeChangeComplete", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <React.Fragment>
      <Head>
        {routeObject ? (
          <>
            <title>{routeObject.page} - CSSEC</title>
            <meta name="twitter:card" value="summary" />
            <meta
              name="twitter:image"
              content={`${cdn_url}/utilities/cssec-twitter-seo.png`}
            />
            <meta property="og:title" content={routeObject.page} />
            <meta property="og:type" content="website" />
            <meta
              property="og:image"
              content={`${cdn_url}/utilities/cssec-default-seo.png`}
            />
            <meta
              property="og:url"
              content={`${frontend_url}${routeObject.href}`}
            />
          </>
        ) : (
          <title>CSSEC</title>
        )}

        <meta
          name="CSSEC"
          content="Computer Studies Executive Council of Ateneo de Davao University"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Header currentRoute={routeObject ? routeObject.page : null} />
          <Component {...pageProps} />
          <Footer />
        </SnackbarProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

CSSECFrontEnd.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
