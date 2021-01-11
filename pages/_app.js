import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../components/theme";

import NProgress from "nprogress";

import "react-image-gallery/styles/css/image-gallery.css";

import Header from "../components/general/header";
import Footer from "../components/general/footer";

NProgress.configure({
    showSpinner: false,
});

Router.onRouteChangeStart = () => {
    NProgress.start();
};

Router.onRouteChangeComplete = url => {
    NProgress.done();
};

Router.onRouteChangeError = () => {
    NProgress.done();
};

export default function CSSECFrontEnd(props) {
    const { Component, pageProps } = props;

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>My page</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Header />
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </React.Fragment>
    );
}

CSSECFrontEnd.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};
